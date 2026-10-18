// ──────────────────────────────────────────────────────────────
//  Edit this file to update the whole site. Everything on the
//  page is driven from here.
// ──────────────────────────────────────────────────────────────

export const profile = {
  name: "Fahad Faisal",
  first: "Fahad",
  school: "York University",
  program: "B.Sc. (Hons.) Computer Science",
  grad: "2029",
  location: "Oshawa, ON · Toronto",
  email: "fahad._.faisal@outlook.com",
  linkedin: "https://www.linkedin.com/in/fahad-faisal-yorku/",
  github: "", // e.g. "https://github.com/yourname" — leave empty to hide
  // 1) Export your resume from Pages as PDF  2) put it in /public  3) set the path, e.g. "/Fahad_Faisal_Resume.pdf"
  // While this is empty, the Resume buttons are hidden.
  resume: "",
  tagline:
    "I turn messy, real-world problems into clean, working software.",
  rotator: [
    "Computer Science @ York University",
    "Building with Java, Python & SQL",
    "Analytical. Accurate. Always shipping.",
  ],
};

export const stats = [
  { value: 1.5, suffix: "+", decimals: 1, label: "years in high-volume, high-pressure teams" },
  { value: 80, suffix: "+", decimals: 0, label: "transactions handled every hour" },
  { value: 100, suffix: "%", decimals: 0, label: "accuracy through peak rushes" },
  { value: 1000, prefix: "$", suffix: "/hr", decimals: 0, label: "in volume managed without errors" },
];

export const skills: Record<string, string[]> = {
  Technical: ["Python", "Java", "SQL", "Git / GitHub", "VS Code", "Data Structures", "Debugging"],
  "Problem Solving": ["Logical Reasoning", "Root Cause Analysis", "System Testing", "Problem Decomposition"],
  Professional: ["Technical Communication", "Cross-functional Collaboration", "Email Etiquette"],
  Operational: ["Task Prioritization", "Time Management", "High-Volume Service", "Conflict Resolution"],
};

export const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Systems",
  "Software Design & Engineering",
  "Operating Systems",
  "Discrete Mathematics",
  "Linear Algebra",
  "Statistics",
  "Data Analysis",
];

export const project = {
  title: "Inventory Management System",
  kicker: "Full-stack · Java · SQL",
  summary:
    "A full-stack application that replaces manual stock tracking with one centralized system, complete with search, filtering and automatic low-inventory alerts.",
  built:
    "Automates restaurant inventory and stock tracking, and generates low-inventory alerts before shelves run empty.",
  tools: ["Java", "SQL", "Object-Oriented Programming"],
  outcome:
    "Improved data organization efficiency by replacing manual tracking with a centralized system. Implemented search and filter functionality for 100+ simulated items behind a user-friendly interface.",
  repo: "", // add your GitHub repo URL to show a "View code" button
};

export const experience = [
  {
    role: "Crew Member",
    org: "McDonald’s Canada",
    place: "Oshawa, Canada",
    dates: "May 2024 – May 2026",
    points: [
      "Streamlined service in a high-traffic environment: 80+ transactions per hour with a drive-thru speed under 110 seconds.",
      "Maximized revenue through consistent upselling, contributing to a 10–15% increase in daily promotional sales targets.",
      "Maintained 100% accuracy in cash handling and order fulfillment during peak rushes, managing over $1,000 in volume per hour.",
      "Ensured peak operational uptime by cross-training across all stations, resolving bottlenecks during understaffed shifts.",
    ],
  },
];

export const availability = "Full-time (Summer) · Part-time (Academic Year) · Eligible to work in Canada";
