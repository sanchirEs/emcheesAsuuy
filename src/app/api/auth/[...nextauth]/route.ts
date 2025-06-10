// // src/app/api/auth/[...nextauth]/route.ts
// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { prisma } from "@/lib/prisma";
// import bcrypt from "bcrypt";

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   session: { strategy: "jwt" },
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     CredentialsProvider({
//       name: "Email & Password",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) return null;
//         const user = await prisma.user.findUnique({ where: { email: credentials.email } });
//         if (!user || !user.passwordHash) return null;

//         const isValid = await bcrypt.compare(credentials.password, user.passwordHash);
//         if (!isValid) return null;

//         return { id: user.id, email: user.email, role: user.role };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       // now TS knows session.user is defined and has role
//       // session.user.id = token.id;
//       session.user.role = token.role;
//       return session;
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
