import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { POSTS } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

/**
 * sitemap.xml — sinh tự động từ danh sách sản phẩm và bài viết.
 * Giới thiệu và Tin tức (danh sách) không còn là route riêng — đã gộp
 * thành section cuộn trong trang chủ (/#gioi-thieu, /#tin-tuc), nên
 * không có URL riêng để liệt kê. Trang chi tiết từng bài viết vẫn giữ
 * route riêng nên vẫn được liệt kê.
 * Trang /admin cố ý không đưa vào (đã chặn ở robots.ts).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...PRODUCTS.map((product) => ({
      url: `${SITE_URL}/san-pham/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...POSTS.map((post) => ({
      url: `${SITE_URL}/tin-tuc/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
