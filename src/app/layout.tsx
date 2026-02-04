import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BI Analyst Portfolio",
  description: "Showcasing Data Dashboards & Analytics Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(outfit.variable, "antialiased bg-background text-foreground overflow-x-hidden")}>
        {children}
      </body>
    </html>
  );
}
