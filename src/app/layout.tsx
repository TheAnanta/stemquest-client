import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STEMQuest",
  description:
    "STEMQuest is a platform for students, parents, and educators to explore STEM education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />

      <body>{children}</body>
    </html>
  );
}
