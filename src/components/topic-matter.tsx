'use client'

import { useState, type ReactNode } from 'react'

import { cn } from '@/lib/utils/tailwind.utils'
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

interface TopicMatterProps {
  className?: string
  children: ReactNode
}

const TopicMatter = ({ ...props }: TopicMatterProps) => {
  const [value, setValue] = useState('')
  return (
    <Accordion
      value={value}
      onValueChange={setValue}
      type="single"
      collapsible
      className="w-full"
      {...props}
    />
  )
}

interface TopicProps {
  className?: string
  children: ReactNode
}

const Topic = ({ className, children }: TopicProps) => (
  <AccordionItem key={'a'} value="item-1" className={cn('mt-2', className)}>
    {children}
  </AccordionItem>
)

interface TopicTittleProps {
  className?: string
  children: ReactNode
}

const TopicTittle = ({ className, children, ...props }: TopicTittleProps) => (
  <AccordionTrigger
    className={cn(
      'rounded px-3 font-semibold transition-colors duration-200 data-[state=open]:bg-[#103755]',
      className
    )}
    {...props}
  >
    {children}
  </AccordionTrigger>
)

interface SubtopicMatterProps {
  children: ReactNode
}

const SubtopicMatter = ({ children }: SubtopicMatterProps) => (
  <AccordionContent>{children}</AccordionContent>
)

interface SubtopicProps {
  children: ReactNode
}

const Subtopic = ({ children }: SubtopicProps) => (
  <Collapsible>{children}</Collapsible>
)

interface SubtopicTittleProps {
  className?: string
  children: ReactNode
}

const SubtopicTittle = ({ children }: SubtopicTittleProps) => (
  <div className="flex items-center gap-4 px-4">
    <Icons.notebook className="h-4 w-4" />
    {children}
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="w-9 p-0">
        <Icons.chevronsUpDown className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
)

interface SubtopicDescriptionProps {
  className?: string
  children: ReactNode
}

const SubtopicDescription = ({ children }: SubtopicDescriptionProps) => (
  <CollapsibleContent className="m-2 px-6">{children}</CollapsibleContent>
)

export {
  TopicMatter,
  Topic,
  TopicTittle,
  SubtopicMatter,
  Subtopic,
  SubtopicTittle,
  SubtopicDescription,
}
