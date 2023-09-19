'use client'

import { useState, type FC, type HTMLAttributes } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'

import { cn } from '@/lib/utils/tailwind.utils'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

export const UserAuthForm: FC<UserAuthFormProps> = ({
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loginWithGoogle = async () => {
    console.log('loginWithGoogle')

    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
      console.error({ error })
      toast.error('Error', {
        description: 'There was an error logging in with Google',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button
        isLoading={isLoading}
        type="button"
        size="sm"
        className="w-full"
        onClick={() => void loginWithGoogle()}
        disabled={isLoading}
      >
        {isLoading ? null : <Icons.google className="mr-2 h-4 w-4" />}
        Google
      </Button>
    </div>
  )
}
