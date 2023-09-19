'use client'

import {
  QueryClient,
  QueryClientProvider,
  type QueryClientProviderProps,
} from '@tanstack/react-query'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
    },
  },
})

export const QueryProvider = ({
  children,
  ...props
}: QueryClientProviderProps) => {
  return <QueryClientProvider {...props}>{children}</QueryClientProvider>
}
