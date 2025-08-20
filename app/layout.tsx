import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Esubalew Gosaye - Software Developer',
  description:
    'Senior Full-Stack Developer with 5+ years of experience in React, Node.js, Python, and cloud technologies. Building scalable web applications and leading development teams.',
  keywords:
    'Software Developer, Python, Django, FastAPI, Node.js, Spring Boot, AWS, Docker, PostgreSQL, MySQL, DSA',
  authors: [{ name: 'Esubalew Gosaye' }],
  openGraph: {
    title: 'Esubalew Gosaye - Software Developer',
    description:
      'Senior Full-Stack Developer with 5+ years of experience in modern web technologies',
    type: 'website',
  },
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} pt-16`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
