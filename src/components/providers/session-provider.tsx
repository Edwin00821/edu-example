'use client'

import * as React from 'react'
import {
  SessionProvider as NextSessionProvider,
  type SessionProviderProps,
} from 'next-auth/react'

export const SessionProvider = ({
  children,
  ...props
}: SessionProviderProps) => {
  return <NextSessionProvider {...props}>{children}</NextSessionProvider>
}
