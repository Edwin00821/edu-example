import { type FC } from 'react'
import { type CoursesConfig } from '@/types'
import { allCourses, type Courses } from 'contentlayer/generated'

import { DocsSidebarNav } from '@/components/sidebar-nav'

interface SlugLayoutProps {
  children: React.ReactNode
  params: {
    slug: string[]
  }
}

const SlugLayout: FC<SlugLayoutProps> = ({ children, params }) => {
  const param = params?.slug[0] ?? ''

  const courses = allCourses
    .filter((course) => {
      const slug = course.slugAsParams
      const exclude = ['in-progress']
      const isValid = !exclude.includes(slug) && slug.includes(param)
      return isValid
    })
    .sort((a, b) => a.index.localeCompare(b.index))

  const buildTree = (course: Courses[]): CoursesConfig => {
    const tree: CoursesConfig = {
      items: [],
    }
    course.forEach((course) => {
      const numberParts = course.index.split('.')
      const currentNode = tree

      if (numberParts.length === 1) {
        currentNode.items.push({
          title: 'Getting Started',
          index: course.index,
          items: [{ title: 'Introduccion', href: course.slug }],
        })
      } else if (numberParts.length === 2) {
        currentNode.items.push({
          title: course.title,
          href: course.slug,
          index: course.index,
          items: [],
        })
      } else if (numberParts.length === 3) {
        const parentNode = currentNode.items.find(
          (node) => node.index === course.index.split('.').slice(0, 2).join('.')
        )
        if (parentNode && parentNode.items) {
          parentNode.items.push({
            title: course.title,
            href: course.slug,
          })
        }
      }
    })

    return tree
  }

  const coursesSidebarNav = buildTree(courses)

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1">
        <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
            <DocsSidebarNav items={coursesSidebarNav.items} />
          </aside>
          {children}
        </div>
      </div>
    </div>
  )
}

export default SlugLayout
