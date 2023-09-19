'use client'

import type { FC, ReactNode } from 'react'

import { queryClient, QueryProvider, SessionProvider, ThemeProvider } from './'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <QueryProvider client={queryClient}>{children}</QueryProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default Providers
