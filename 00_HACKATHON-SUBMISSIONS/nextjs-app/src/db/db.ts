import { drizzle } from "drizzle-orm/neon-http"

if (process.env.DATABASE_URL === undefined) {
    process.exit('database url was not passed')
}
export const db = drizzle(process.env.DATABASE_URL) 