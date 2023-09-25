import { type FC } from 'react'
import { redirect } from 'next/navigation'

const Home: FC = () => {
  redirect('/courses')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  )
}

export default Home
