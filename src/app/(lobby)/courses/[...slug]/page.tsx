import { notFound } from 'next/navigation'
import { allCourses } from 'contentlayer/generated'

import '@/styles/mdx.css'

import { type Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { getTableOfContents } from '@/lib/toc'
import { absoluteUrl } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Mdx } from '@/components/mdx/mdx-components'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { MdxPager } from '@/components/pagers/mdx-pager'
import { Shell } from '@/components/shells/shell'
import { DashboardTableOfContents } from '@/components/toc'

interface CoursePageProps {
  params: {
    slug: string[]
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
async function getCourseFromParams(params: CoursePageProps['params']) {
  const slug = params?.slug?.join('/') ?? ''

  const course = allCourses.find((course) => course.slugAsParams === slug)

  if (!course) {
    null
  }

  return course
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const course = await getCourseFromParams(params)

  if (!course) {
    return {}
  }

  const url = absoluteUrl('/')

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('title', course.title)
  ogUrl.searchParams.set('type', siteConfig.name)
  ogUrl.searchParams.set('mode', 'light')

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: 'article',
      url: absoluteUrl(course.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: course.description,
      images: [ogUrl.toString()],
    },
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams(): Promise<
  CoursePageProps['params'][]
> {
  return allCourses
    .filter((post) => post.slugAsParams !== '')
    .map((course) => ({
      slug: course.slugAsParams.split('/'),
    }))
}

export default async function CoursePage({ params }: CoursePageProps) {
  const course = await getCourseFromParams(params)

  if (!course) {
    notFound()
  }

  const toc = await getTableOfContents(course.body.raw)

  // Remove the /course prefix from the slug
  const formattedPage = {
    ...course,
    slug: course.slug.replace(/^\/courses/, ''),
  }

  const formattedPages = allCourses.map((course) => ({
    ...course,
    slug: course.slug.replace(/^\/courses/, ''),
  }))

  return (
    <Shell as="main" variant="sidebar">
      <div className="mx-auto w-full min-w-0">
        <PageHeader>
          <PageHeaderHeading>{course.title}</PageHeaderHeading>
          <PageHeaderDescription>{course.description}</PageHeaderDescription>
        </PageHeader>
        <Separator className="my-4" />
        <Mdx code={course.body.code} />
        <MdxPager
          currentItem={formattedPage}
          allItems={formattedPages}
          className="my-4"
        />
      </div>

      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </Shell>
  )
}
