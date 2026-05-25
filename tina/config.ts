import { defineConfig } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'adventure',
        label: 'Outdoor Adventures',
        path: 'content/outdoors',
        format: 'md',
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              const title = (values?.title || 'untitled')
                .toString()
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
              return title || 'untitled';
            },
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
            ui: {
              dateFormat: 'MMMM D, YYYY',
            },
          },
          {
            type: 'string',
            name: 'location',
            label: 'Location',
            description: 'Where the adventure took place (e.g. "North Cascades, WA")',
          },
          {
            type: 'string',
            name: 'summary',
            label: 'Summary',
            description: 'A short one-or-two-sentence teaser shown on the index page.',
            ui: { component: 'textarea' },
          },
          {
            type: 'image',
            name: 'cover',
            label: 'Cover Image',
            description: 'Hero image displayed at the top of the post and on the index card.',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
            description: 'Hide this post from the public index.',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
