'use client'

import { useState, type FC } from 'react'
import Link from 'next/link'
import { allCourses } from 'contentlayer/generated'

import { slugify } from '@/lib/utils/format.utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Icons } from '@/components/icons'

import { type Topics } from '../types'

interface TopicMatterProps {
  topics: Topics[]
}

export const TopicMatter: FC<TopicMatterProps> = () => {
  const [value, setValue] = useState('')
  const param = 'sql'
  const courses = allCourses.filter((course) => {
    const slug = course.slugAsParams
    const exclude = ['', 'in-progress', param]
    const isValid = !exclude.includes(slug) && slug.includes(param)
    delete course._raw
    delete course.body
    return isValid
  })

  console.log({ courses })

  return (
    <Accordion
      value={value}
      onValueChange={setValue}
      type="single"
      collapsible
      className="w-full"
    >
      {/* {topics.map(({ topic, subtopics }) => {
        const topicSlug = slugify(topic)
        return (
          <AccordionItem itemScope value={topic} key={topic} className="mt-2">
            <AccordionTrigger
              className={`rounded ${
                value !== '' ? 'data-[state=open]:bg-[#103755]' : 'bg-[#103755]'
              }  px-3 font-semibold transition-colors duration-200`}
            >
              {topic}
            </AccordionTrigger>
            <AccordionContent>
              {subtopics.map(({ title, description }) => {
                const subtopicSlug = slugify(title)
                return (
                  <Collapsible key={title}>
                    <div className="flex items-center space-x-4 px-4">
                      <Icons.notebook className="h-4 w-4" />

                      <h4 className="text-sm font-semibold">
                        <Link
                          href={`/cursos/mongodb/${topicSlug}/#${subtopicSlug}`}
                        >
                          {title}
                        </Link>
                      </h4>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                          <Icons.chevronsUpDown className="h-4 w-4" />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>

                    <CollapsibleContent className="m-2 px-6">
                      {description}
                    </CollapsibleContent>
                  </Collapsible>
                )
              })}
            </AccordionContent>
          </AccordionItem>
        )
      })} */}
    </Accordion>
  )
}

TopicMatter.displayName = 'TopicMatter'
