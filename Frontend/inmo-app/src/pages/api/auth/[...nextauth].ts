import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import {logIn} from '@/services/auth';
import {LogInCredentials} from '@/types/auth';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {label: 'Email', type: 'email'},
        contrasenia: {label: 'Password', type: 'password'},
      },
      async authorize(credentials) {
        try {
          const {data} = await logIn(credentials as LogInCredentials);
          return data;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token = {...token, ...user};
      }
      return token;
    },

    async session({session, token}) {
      session = {...session, ...token};
      return session;
    },
  },
  pages: {
    signIn: '/auth/sign-in',
  },
});

export default handler;
