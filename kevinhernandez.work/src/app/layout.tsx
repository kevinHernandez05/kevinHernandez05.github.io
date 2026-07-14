import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Hernandez | Software Engineer",
  description:
    "Full Stack Software Engineer building SaaS products, developer tools, and digital systems.",
  icons: {
    icon: "/kevin.png",
    shortcut: "/kevin.png",
    apple: "/kevin.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}