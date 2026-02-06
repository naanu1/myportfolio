import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Harshith M | AI Engineer & Full Stack Developer",
  description: "Generative AI Engineer & Full Stack Engineer specializing in Agentic Workflows, RAG pipelines, and scalable Serverless AI platforms. Expert in AWS, Python, React, and Next.js.",
  keywords: [
    "AI Engineer",
    "Generative AI",
    "RAG",
    "Agentic Workflows",
    "Full Stack Developer",
    "AWS",
    "Python",
    "React",
    "Next.js",
    "Harshith M",
    "Portfolio"
  ],
  authors: [{ name: "Harshith M" }],
  openGraph: {
    title: "Harshith M | AI Engineer",
    description: "Generative AI & Full Stack Solutions. View my 3D Portfolio.",
    type: "website",
    locale: "en_US",
    siteName: "Harshith M | Portfolio",
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#050210",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
