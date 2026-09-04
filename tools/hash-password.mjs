/**
 * Sinh giá trị ADMIN_PASSWORD_HASH cho trang quản trị.
 *
 *   npm run admin:hash -- "mat-khau-cua-ban"
 *
 * Chép chuỗi in ra vào .env.local (và Environment Variables trên Vercel khi deploy).
 */
import { randomBytes, scryptSync } from "node:crypto";

const password = process.argv[2];

if (!password) {
  console.error('Cách dùng: npm run admin:hash -- "mat-khau-cua-ban"');
  process.exit(1);
}

const salt = randomBytes(16).toString("hex");
const derived = scryptSync(password, salt, 64).toString("hex");

console.log(`ADMIN_PASSWORD_HASH=${salt}:${derived}`);
