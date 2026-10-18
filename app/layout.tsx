import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fahad Faisal — Computer Science @ York University",
  description:
    "Portfolio of Fahad Faisal, a second-year Computer Science student at York University building with Java, Python and SQL.",
  openGraph: {
    title: "Fahad Faisal — Computer Science @ York University",
    description: "Projects, experience and resume of Fahad Faisal.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
