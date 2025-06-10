// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    /** URL of your deployed app (exposed to client) */
    NEXT_PUBLIC_APP_URL: string;
    /** Next.js runtime environment */
    NODE_ENV: 'development' | 'production' | 'test';
    /** Secret for NextAuth */
    NEXTAUTH_SECRET: string;
    /** Prisma/Postgres connection (pooled) */
    DATABASE_URL: string;
    /** Direct DB URL (for migrations) */
    DIRECT_URL: string;
    // …add other env vars here as needed
  }
}
