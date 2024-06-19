import type { Metadata } from 'next';
import { Manrope as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { ourFileRouter } from './api/uploadthing/core';
import Footer from '@/components/page-footer';
import { Header } from '@/components/header/page-header';
import StoreProvider from '@/store-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    template: '%s | audiophile',
    default: 'audiophile',
  },
  description: 'Frontend Mentor challenge - Audiophile e-commerce website',
  metadataBase: new URL(
    'https://nextjs-audiophile-ecommerce-website.vercel.app/',
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          'w-screen overflow-x-hidden bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <StoreProvider>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <Header />
          {children}
          <Footer />
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
