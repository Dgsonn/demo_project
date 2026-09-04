/**
 * Địa chỉ gốc của website — dùng cho metadataBase, sitemap.xml và robots.txt.
 * Khi deploy, đặt NEXT_PUBLIC_SITE_URL trong biến môi trường (vd. https://ptthai.vn).
 * Vercel tự cấp VERCEL_PROJECT_PRODUCTION_URL nên bản deploy vẫn đúng nếu chưa có domain riêng.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
