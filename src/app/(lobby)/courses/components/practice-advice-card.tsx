import { forwardRef, type HTMLAttributes } from 'react'

import { cn } from '@/lib/utils/tailwind.utils'

interface PracticeAdviceCardProps extends HTMLAttributes<HTMLDivElement> {}

export const PracticeAdviceCard = forwardRef<
  HTMLDivElement,
  PracticeAdviceCardProps
>(({ className, ...props }, ref) => (
  <section ref={ref} className={cn('', className)} {...props}>
    PracticeAdviceCard
  </section>
))
PracticeAdviceCard.displayName = 'PracticeAdviceCard'
