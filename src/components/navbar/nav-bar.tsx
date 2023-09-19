import Link from 'next/link'
import { getServerSession } from 'next-auth'

import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

import { UserAccountNav } from './user-account-nav'

export const Navbar = async () => {
  const session = await getServerSession()
  console.log({ session })

  return (
    <section className="sticky inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-slate-300 bg-white/75 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/75">
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className={buttonVariants({ variant: 'link' })}>
          EduDev
        </Link>

        <div className="md:hidden">
          <ThemeToggle />
        </div>

        <div className="hidden gap-4 md:flex">
          <ThemeToggle />

          {session ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href="/sign-in" className={buttonVariants()}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
