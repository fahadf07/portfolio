<div align="center">

# Fahad Faisal — Portfolio

**An interactive, Apple-inspired portfolio built with Next.js.**

[**Live site →**](https://fahad-faisal-portfolio.vercel.app/#to) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/fahad-faisal-yorku/)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-ff0055?logo=framer&logoColor=white)

<img src="docs/hero.png" alt="Portfolio hero section" width="860" />

</div>

---

## About

This is the personal portfolio of **Fahad Faisal**, a second-year Computer Science student at **York University** (B.Sc. Hons., expected 2029). It showcases my projects, experience, skills and coursework in a fast, smooth, visually polished single-page site, designed to feel like a product page rather than a résumé dump.

## Features

| | |
|---|---|
| **Cinematic hero** | Animated aurora background that follows the cursor, a typewriter tagline and scroll-based parallax. |
| **Scroll-scrubbed statement** | Words light up one by one as you scroll, in the style of Apple product pages. |
| **Animated stat cards** | Numbers count up on scroll; cards have a cursor-tracking spotlight border. |
| **Interactive skills** | Category tabs with a sliding pill, staggered chips and an infinite coursework marquee. |
| **Live project demo** | A working inventory-management demo: search 120 items, filter by location, low-stock alerts and one-click restocking. |
| **Experience timeline** | A gradient line that draws itself as you scroll. |
| **Command-line terminal** | A fake terminal with real commands (`help`, `skills`, `projects`, `contact`, …), command history (↑/↓) and an easter egg. |
| **Responsive & accessible** | Works from phones to ultrawide monitors, keyboard-friendly, and respects the OS "reduce motion" setting. |
| **Single-file content** | Update the whole site from `lib/data.ts`, with no hunting through components. |

<details>
<summary><b>More screenshots</b></summary>
<br />

**Projects, with the interactive demo**

<img src="docs/projects.png" alt="Projects section with inventory demo" width="860" />

**Terminal**

<img src="docs/terminal.png" alt="Interactive terminal" width="860" />

**Mobile**

<img src="docs/mobile.png" alt="Mobile layout" width="300" />

</details>

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router) with **React 19**
- **TypeScript**
- **[Tailwind CSS 4](https://tailwindcss.com/)** for styling
- **[Framer Motion](https://www.framer.com/motion/)** for animations, scroll effects and gestures
- Deployed on **[Vercel](https://vercel.com/)**

No backend, database or API keys are required. The site is fully static.

## Project structure

```
.
├── app/
│   ├── layout.tsx        # Root layout + SEO metadata
│   ├── page.tsx          # Page composition (all sections in order)
│   ├── globals.css       # Theme colours, fonts, shared effects
│   └── icon.svg          # Favicon
├── components/
│   ├── Nav.tsx           # Glass nav bar + scroll progress + active link
│   ├── Hero.tsx          # Aurora hero + typewriter
│   ├── Statement.tsx     # Scroll-scrubbed headline
│   ├── About.tsx         # Stats, education, availability
│   ├── Skills.tsx        # Tabs + coursework marquee
│   ├── Projects.tsx      # Featured project card (3D tilt)
│   ├── InventoryDemo.tsx # Interactive inventory demo
│   ├── Experience.tsx    # Timeline
│   ├── Terminal.tsx      # Interactive terminal
│   ├── Contact.tsx       # Call to action + footer
│   ├── MotionRoot.tsx    # Reduced-motion support
│   └── ui.tsx            # Reveal, SpotCard, Counter, SectionTitle
├── lib/
│   └── data.ts           # ← All site content lives here
├── docs/                 # README screenshots
└── public/               # Static files (resume PDF, images)
```

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) 20 or newer.

```bash
# 1. Clone the repo
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open <http://localhost:3000>. The page hot-reloads as you edit.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |

## Customizing

### Content: `lib/data.ts`

Everything on the page is driven from this one file:

| Export | Controls |
|---|---|
| `profile` | Name, school, email, LinkedIn/GitHub links, resume path, tagline, rotating hero text |
| `stats` | The animated number cards in About |
| `skills` | The tabbed skill categories |
| `coursework` | The scrolling coursework strip |
| `project` | The featured project (title, tools, outcome, repo link) |
| `experience` | Timeline entries |


## A note on the inventory demo

The demo in the Projects section is a **front-end recreation** of the Inventory Management System concept using simulated data (120 items). The original project was built with Java, SQL and object-oriented design. The demo exists to let visitors interact with the idea.

## Roadmap

- [ ] Add more projects as they're built
- [ ] Add screenshots or a recording of the original Java/SQL app
- [ ] Custom domain
- [ ] Optional light theme

## Contact

**Fahad Faisal** · Computer Science @ York University

- LinkedIn: [fahad-faisal-yorku](https://www.linkedin.com/in/fahad-faisal-yorku/)
- Email: fahad._.faisal@outlook.com
