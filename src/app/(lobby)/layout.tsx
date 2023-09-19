import { getServerSession } from 'next-auth'

import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'

interface CoursesLayoutProps {
  children: React.ReactNode
}

const CoursesLayout = async ({ children }: CoursesLayoutProps) => {
  const session = await getServerSession()
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={session?.user} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}

export default CoursesLayout
