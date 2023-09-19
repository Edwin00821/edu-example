import { NextResponse } from 'next/server'
import { toast } from 'sonner'
import { z } from 'zod'

export const catchError = (err: unknown) => {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message
    })
    return toast(errors.join('\n'))
  } else if (err instanceof Error) {
    return toast(err.message)
  } else {
    return toast('Something went wrong, please try again later.')
  }
}

interface ApiEror {
  error?: unknown
  message?: string
  status?: number
}

export const apiError = ({ error, message, status = 500 }: ApiEror) => {
  if (error instanceof z.ZodError) {
    return NextResponse.json({ error: error.errors }, { status: 400 })
  }

  if (error instanceof Error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json(
    { error: message ?? 'Something went wrong, please try again later.' },
    { status }
  )
}
