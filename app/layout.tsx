import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrownsVox — AI Video Creation",
  description: "Turn prompts, images, and scripts into powerful AI videos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
