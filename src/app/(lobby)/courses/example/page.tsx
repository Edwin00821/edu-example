import { type FC } from 'react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { Shell } from '@/components/shells/shell'

import { TopicMatter } from './components/topic-matter'
import { KNOWLEDGE, TOPICS } from './utils'

const Page: FC = () => {
  const topics = TOPICS.length
  const subtopics = TOPICS.reduce(
    (length, { subtopics }) => length + subtopics.length,
    0
  )

  // const subtopics = TOPICS.map(({ subtopics }) => subtopics).flat().length
  return (
    <Shell className="p-0">
      <section className="flex flex-col ">
        <h1>Aprende MongoDB desde Cero a Experto</h1>
        <h3>
          MongoDB Server, MongoDB Compass, MongoDB Atlas. Operaciones CRUD,
          Índices, Framework de Agregación y más!
        </h3>
        <div> 4.4 ⭐⭐⭐⭐⭐ {'(20 calificaciones) 78 estudiantes'}</div>
        <p>
          Creado por
          <Link href="/" className={buttonVariants({ variant: 'link' })}>
            Edwin Uriel Astudillo Perez
          </Link>
        </p>
      </section>

      <section className="grid w-full place-items-center">
        <Card className="max-w-4xl">
          <CardHeader>
            <CardTitle>Lo que aprenderas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 [&>li]:inline-flex [&>li]:gap-2">
              {KNOWLEDGE.map((knowledge) => (
                <li key={knowledge}>
                  <Icons.check className="h-6 w-6" />
                  <p className="w-full">{knowledge}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">Contenido del curso</h3>
        <p>
          {topics} temas • {subtopics} subtemas
        </p>

        <TopicMatter />
      </section>

      <section>
        <h3 className="text-2xl font-semibold">Requisitos</h3>
        <ol className="list-disc [&>li]:mx-7">
          <li>Conocimientos mínimos sobre base de datos.</li>
          <li>
            Conocimientos generales sobre desarrollo web o movil que lo ayudará,
            no es imprescindible.
          </li>
          <li>
            Puede usar cualquier sistema operativo: Windows, Linux o macOS.
          </li>
          <li>¡Muchas ganas de aprender!</li>
        </ol>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">Requisitos</h3>
        <ol className="list-disc [&>li]:mx-7">
          <li>Conocimientos mínimos sobre base de datos.</li>
          <li>
            Conocimientos generales sobre desarrollo web o movil que lo ayudará,
            no es imprescindible.
          </li>
          <li>
            Puede usar cualquier sistema operativo: Windows, Linux o macOS.
          </li>
          <li>¡Muchas ganas de aprender!</li>
        </ol>
      </section>
    </Shell>
  )
}

export default Page
