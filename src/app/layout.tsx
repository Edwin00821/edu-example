import { siteConfig } from '@/config/site'
import { fontHeading, fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils/tailwind.utils'
import { Providers } from '@/components/providers'

import '@/styles/globals.css'

import type { Metadata } from 'next'
import { env } from '@/env.mjs'

import { Toaster } from '@/components/ui/toaster'
import { TailwindIndicator } from '@/components/tailwind-indicator'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  authors: [
    {
      name: 'Edwin',
      url: 'https://edudev.com',
    },
  ],
  creator: 'Edwin',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@edwinperez008',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
  authModal: React.ReactNode
}

export default function RootLayout({ children, authModal }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontMono.variable,
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Providers>
          {authModal}
          {children}
          <TailwindIndicator />
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
