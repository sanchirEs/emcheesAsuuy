// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      /** `role` comes from your database */
      role: string;
    } & DefaultSession["user"];
  }
  interface User {
    /** tell TS your User has `role` */
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    /** store `role` in the token */
    role: string;
  }
}
