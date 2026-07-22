# Shinoah Carmona — VA Portfolio

A modern, responsive one-page portfolio built with React + Vite.

## Sections
- **Hero** — name, role, quick pitch
- **About** — short bio + quick facts
- **Skills** — tool "dock" + three skill categories (Admin & Communication, Creative & Content, Web Development)
- **Contact** — placeholder email/social links + a contact form (opens the visitor's email client via `mailto:`)

## Customize before publishing
1. Open `src/components/Contact.jsx` and edit the block marked `CUSTOMIZE ME`:
   - `CONTACT_EMAIL`
   - LinkedIn / Facebook links (or swap for other platforms)
2. Update the skill bullet points in `src/components/Skills.jsx` if your services change.
3. Update the bio copy in `src/components/About.jsx`.

## Run locally
```bash
npm install
npm run dev
```
Then open the local URL shown in the terminal (usually http://localhost:5173).

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts (framework preset: **Vite**, build command: `npm run build`, output directory: `dist`).

**Option B — Vercel dashboard**
1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Vite. Keep the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

Every push to your main branch will auto-redeploy.
