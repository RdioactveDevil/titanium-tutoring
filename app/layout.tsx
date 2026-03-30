import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Titanium Tutoring",
  description: "Expert tutoring for VCE, SACE, NAPLAN, and selective entry exams.",
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
