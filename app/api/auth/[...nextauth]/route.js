import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { InvalidCredentialsError, ServerError } from "@/app/errors";

// TODO: understand csrf

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials) throw new InvalidCredentialsError();

                const res = await axios.post('http://localhost:8080/auth/token',{},
                    {
                        headers: {
                            'Authorization': 'Basic ' + btoa(credentials?.username + ":" + credentials?.password)
                        },
                        validateStatus: () => true
                    }
                );

                switch (res.status) {
                    case 200:
                        return res.data;
                    case 401:
                        throw new InvalidCredentialsError();
                    default:
                        throw new ServerError();
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.token
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            return session;
        }
    },
    pages: {
      signIn: '/login',
      error: '/login',
      signOut: '/logout'
    },
    session: { // to study
        jwt: true,
        maxAge: 5 * 24 * 60 * 60
    },
    cookies: { // to study
        sessionToken: {
            name: "next-auth.session-token",
            options: {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 5 * 24 * 60 * 60,
                path: "/"
            }
        }
    }
});

export { handler as GET, handler as POST }