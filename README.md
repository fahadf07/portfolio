# Fahad Faisal — Portfolio

Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy (free) on Vercel
1. Push this folder to a GitHub repo.
2. Go to vercel.com → **Add New → Project** → import the repo.
3. Click **Deploy**. No settings needed.

## Edit your content
Almost everything lives in **`lib/data.ts`**: name, links, skills, project, experience.

To do before publishing:
- **Resume button:** export your resume from Pages as a PDF, drop it in `public/`, and set `resume` in `lib/data.ts`.
- **GitHub:** set `github` in `lib/data.ts` (the button appears automatically).
- **Project repo:** set `project.repo` to show a "View code" button.
- **Email:** currently the outlook address from your resume — change it if you prefer another.

## Adding a project
Add another entry in `lib/data.ts` and duplicate the featured card in `components/Projects.tsx`.
Screenshots go in `public/` and can be shown with `next/image`.

## Note on the inventory demo
The demo in the Projects section is a front-end recreation of the idea with simulated data;
it is not your actual Java/SQL app. Swap in screenshots or a screen recording of the real thing when you can.
