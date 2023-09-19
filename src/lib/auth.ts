import { getServerSession, type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import {
  GITHUB_ID,
  GITHUB_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from './constants'

export const authOptions: NextAuthOptions = {
  // debug: process.env.NODE_ENV === "development",
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
        session.user.username = token.username
      }

      return session
    },

    jwt({ token }) {
      // const dbUser = await db.user.findFirst({
      //   where: {
      //     email: token.email,
      //   },
      // })

      // if (!dbUser) {
      //   token.id = user!.id
      //   return token
      // }

      // if (!dbUser.username) {
      //   await db.user.update({
      //     where: {
      //       id: dbUser.id,
      //     },
      //     data: {
      //       username: nanoid(10),
      //     },
      //   })
      // }

      // return {
      //   id: dbUser.id,
      //   name: dbUser.name,
      //   email: dbUser.email,
      //   picture: dbUser.image,
      //   username: dbUser.username,
      // }
      return token
    },
    redirect() {
      return '/'
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions)
