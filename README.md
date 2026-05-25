## thisisjackryan.com

Built with [Next.js](https://nextjs.org/) (App Router) and [TinaCMS](https://tina.io) for the `/outdoors` field notes.

Old highschool site: <https://archive.thisisjackryan.com/>
Current site: <https://thisisjackryan.com/>

### Local development

```bash
npm install
npm run dev
```

This boots Tina alongside Next.js. Open:

- `http://localhost:3000` — the site
- `http://localhost:3000/admin/index.html` — the Tina editor

In local dev, the editor works without any auth — anyone with the dev server running can edit. Auth only matters in production (see below).

### Writing a new field note (no code)

1. Visit `/admin/index.html` on a deployed environment (or locally).
2. Sign in with the GitHub account that owns this repo. Tina Cloud blocks everyone else.
3. Open **Outdoor Adventures → Create New**, fill in the fields, write the body in the rich editor, hit **Save**.
4. Tina commits a new markdown file to `content/outdoors/` on GitHub. Vercel auto-deploys it in ~30s.

### Production setup (Tina Cloud + Vercel)

One-time:

1. Sign up at [app.tina.io](https://app.tina.io) and create a project pointed at this GitHub repo.
2. Restrict editor access to your GitHub account in the Tina project's collaborators settings — this is what enforces "only Jack can publish".
3. Grab the **Client ID** and a read-only **Token** from Tina.
4. Add these env vars in Vercel (Production + Preview):
   - `NEXT_PUBLIC_TINA_CLIENT_ID` — from Tina
   - `TINA_TOKEN` — from Tina
5. Redeploy. The build script (`tinacms build && next build`) generates the admin UI at `/admin/index.html`.

### Adding new content collections

Edit `tina/config.ts` and add a new entry under `schema.collections`. Each collection is a folder of markdown files plus a schema of fields (text, image, rich-text, etc.). See <https://tina.io/docs/reference/collections>.
