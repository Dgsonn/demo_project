import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

/**
 * Lazily-created singleton so builds/routes that never touch the DB don't
 * require DATABASE_URL to be set (e.g. static pages, typecheck).
 */
let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (_db) return _db;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Copy .env.example to .env.local and add your Postgres connection string (e.g. from neon.tech).",
    );
  }
  const sql = neon(url);
  _db = drizzle(sql, { schema });
  return _db;
}
