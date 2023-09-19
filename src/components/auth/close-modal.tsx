'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation'

import { Icons } from '@/components/icons'

import { Button } from '../ui'

interface CloseModalProps {}

export const CloseModal: FC<CloseModalProps> = ({}) => {
  const router = useRouter()

  return (
    <Button
      variant="subtle"
      className="h-6 w-6 rounded-md p-0"
      onClick={() => router.replace('/')}
    >
      <Icons.close aria-label="close modal" className="h-4 w-4" />
    </Button>
  )
}
