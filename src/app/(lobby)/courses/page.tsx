import { type Metadata } from 'next'
import Link from 'next/link'
import { env } from '@/env.mjs'
import { allCourses } from 'contentlayer/generated'

import { formatDate } from '@/lib/utils/format.utils'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Separator } from '@/components/ui/separator'
import { Icons } from '@/components/icons'
import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shells/shell'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Cursos',
  description: 'Explora los ultimos cursos de la comunidad',
}

const CoursePage = () => {
  const courses = allCourses.filter((course) => {
    const slug = course.slugAsParams
    const isPublished = course.published
    const isValid = slug !== '' && slug !== 'in-progress'
    const isNested = slug.split('/').length > 1

    return isPublished && isValid && !isNested
  })

  return (
    <>
      <SiteHeader />

      <Shell as="main" className="md:pb-10">
        <PageHeader
          id="courses-header"
          aria-labelledby="courses-header-heading"
        >
          <PageHeaderHeading>Cursos</PageHeaderHeading>
          <PageHeaderDescription>
            Explora los ultimos cursos de la comunidad
          </PageHeaderDescription>
        </PageHeader>
        <Separator className="mb-2.5" />
        <section
          id="courses-post"
          aria-labelledby="courses-post-heading"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {courses.map((post) => (
            <Link key={post.slug} href={post.slug}>
              <article className="flex flex-col space-y-2.5">
                <AspectRatio ratio={16 / 9}>
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
                      className="rounded-lg object-cover object-bottom"
                    />
                  ) : (
                    <div
                      aria-label="Placeholder"
                      role="img"
                      aria-roledescription="placeholder"
                      className="flex h-full w-full items-center justify-center rounded-lg bg-secondary"
                    >
                      <Icons.photo
                        className="h-9 w-9 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </AspectRatio>
                <h3 className="line-clamp-1 text-xl font-semibold">
                  {post.title}
                </h3>
                <p className="line-clamp-2 text-muted-foreground">
                  {post.description}
                </p>
                {post.date ? (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                ) : null}
              </article>
              <span className="sr-only">{post.title}</span>
            </Link>
          ))}
        </section>
      </Shell>

      <SiteFooter />
    </>
  )
}

export default CoursePage
