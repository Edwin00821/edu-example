import { type FC } from 'react'
import { type SidebarNavItem } from '@/types'
import { allCourses } from 'contentlayer/generated'

import { docsConfig } from '@/config/docs'
import { DocsSidebarNav } from '@/components/sidebar-nav'

interface SlugLayoutProps {
  children: React.ReactNode
  params: {
    slug: string[]
  }
}

const SlugLayout: FC<SlugLayoutProps> = ({ children, params }) => {
  const param = params?.slug[0] ?? ''

  const coursesSidebarNav: SidebarNavItem[] = []

  allCourses
    .filter((course) => {
      const slug = course.slugAsParams
      const exclude = ['in-progress']
      const isValid = !exclude.includes(slug) && slug.includes(param)
      return isValid
    })
    .forEach((course) => {
      console.log(course.slug)
      console.log(course.slugAsParams)

      const slug = course.slugAsParams.split('/')
      const newNode: SidebarNavItem = {
        title: course.title,
        href: course.slug,
      }
      if (slug.length === 1) {
        coursesSidebarNav.push({
          title: 'Getting Started',
          items: [
            {
              title: 'Introduction',
              href: course.slug,
            },
          ],
        })
      } else if (slug.length === 2) {
        coursesSidebarNav.push({
          title: 'Getting Started',
          items: [newNode],
        })
      } else if (slug.length === 3) {
        const parentNode = coursesSidebarNav.find((node) =>
          course.slug.includes(node.href ?? '')
        )
        console.log(parentNode)

        if (parentNode && !parentNode.items) {
          parentNode.items = []
        }

        parentNode?.items?.push(newNode)
      }
    })

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1">
        <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
            <DocsSidebarNav items={coursesSidebarNav} />
          </aside>
          {children}
        </div>
      </div>
    </div>
  )
}

export default SlugLayout
