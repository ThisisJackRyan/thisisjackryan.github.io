import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ADVENTURES_DIR = path.join(process.cwd(), 'content', 'outdoors');

function readAllFiles() {
  if (!fs.existsSync(ADVENTURES_DIR)) return [];
  return fs
    .readdirSync(ADVENTURES_DIR)
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'));
}

function parseFile(filename) {
  const fullPath = path.join(ADVENTURES_DIR, filename);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.(md|mdx)$/, '');
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? new Date(data.date).toISOString() : null,
    location: data.location ?? null,
    summary: data.summary ?? null,
    cover: data.cover ?? null,
    draft: Boolean(data.draft),
    body: content,
  };
}

export function getAllAdventures({ includeDrafts = false } = {}) {
  return readAllFiles()
    .map(parseFile)
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => {
      const da = a.date ? Date.parse(a.date) : 0;
      const db = b.date ? Date.parse(b.date) : 0;
      return db - da;
    });
}

export function getAdventureBySlug(slug) {
  const filename = readAllFiles().find(
    (name) => name.replace(/\.(md|mdx)$/, '') === slug,
  );
  if (!filename) return null;
  return parseFile(filename);
}

export function formatAdventureDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
