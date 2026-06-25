/**
 * Single source of truth cho dữ liệu sản phẩm.
 * Khi có thêm dòng, chỉ cần thêm vào PRODUCTS — trang tự generate.
 */

export type ProductFeature = {
  title: string;
  desc: string;
};

export type ProductApplication = {
  title: string;
  desc: string;
  /** hex color, dùng cho tile trực quan */
  tint: string;
};

export type Product = {
  slug: "bot-mi" | "bot-bien-tinh";
  name: string;
  tagline: string;
  description: string;
  featuresTitle: string;
  appsTitle: string;
  features: ProductFeature[];
  applications: ProductApplication[];
  specs: { label: string; value: string }[];
  hero: { tint: string };
};

export const PRODUCTS: Product[] = [
  {
    slug: "bot-mi",
    name: "Bột mì PT",
    tagline: "Bột mì đa dụng cho bánh mì, bánh ngọt và mì sợi.",
    description:
      "Tinh chế từ lúa mì chọn lọc, đạt chuẩn ISO 22000 và HACCP. Hạt mịn, protein ổn định — lý tưởng cho cả thợ làm bánh chuyên nghiệp lẫn dây chuyền sản xuất.",
    featuresTitle: "Ổn định. Mịn. Đáng tin.",
    appsTitle: "Phù hợp cho mọi ứng dụng bột mì",
    features: [
      {
        title: "Protein 11% — gluten cao",
        desc: "Độ đàn hồi tốt, giữ cấu trúc bánh qua thời gian nướng và bảo quản.",
      },
      {
        title: "Hạt mịn đồng đều",
        desc: "Quy trình sàng lọc nghiêm ngặt — không tạp chất, không vón cục.",
      },
      {
        title: "An toàn thực phẩm",
        desc: "Đạt ISO 22000 · HACCP · SGS, truy xuất được theo từng lô sản xuất.",
      },
    ],
    applications: [
      {
        title: "Bánh mì Việt Nam",
        desc: "Vỏ giòn, ruột xốp, giữ độ ẩm — phù hợp cho cả tiệm bánh mì truyền thống lẫn dây chuyền công nghiệp.",
        tint: "#f3d28a",
      },
      {
        title: "Bánh ngọt & pastry",
        desc: "Bông xốp, vàng đều, không xẹp — kết hợp tốt với các loại nhân ngọt và kem.",
        tint: "#efe7d4",
      },
      {
        title: "Mì sợi & bún",
        desc: "Sợi dai, không nát khi trụng, giữ độ trong và độ bóng tự nhiên.",
        tint: "#fff7e0",
      },
    ],
    specs: [
      { label: "Độ ẩm", value: "≤ 14.0%" },
      { label: "Protein", value: "≥ 11.0%" },
      { label: "Tro", value: "≤ 0.65%" },
      { label: "Chỉ số Gluten", value: "≥ 28%" },
      { label: "Độ mịn (CCM-01)", value: "≥ 75%" },
      { label: "Đóng gói", value: "25 kg / 50 kg" },
    ],
    hero: { tint: "radial-gradient(ellipse at 30% 20%, var(--pt-cream) 0%, var(--pt-cream) 40%, var(--pt-cream-deep) 100%)" },
  },
  {
    slug: "bot-bien-tinh",
    name: "Bột biến tính PT",
    tagline:
      "Modified starch cho ngành thực phẩm và sản xuất công nghiệp.",
    description:
      "Bột biến tính qua quy trình vật lý / enzyme được kiểm soát chặt chẽ — tùy biến cấu trúc (xốp, đặc, gel) theo ứng dụng, đảm bảo tính ổn định và an toàn thực phẩm.",
    featuresTitle: "Tùy biến. Ổn định. An toàn.",
    appsTitle: "Đáp ứng nhiều ngành công nghiệp",
    features: [
      {
        title: "Tùy biến tính chất",
        desc: "Điều chỉnh độ hồ hóa, độ đặc, khả năng tạo gel — theo yêu cầu ứng dụng cụ thể.",
      },
      {
        title: "Ổn định cấu trúc sản phẩm",
        desc: "Kéo dài thời hạn, chống phân tách pha, cải thiện cảm quan trong bảo quản.",
      },
      {
        title: "Tiêu chuẩn quốc tế",
        desc: "Đạt tiêu chuẩn FDA, Codex Alimentarius và QCVN về phụ gia thực phẩm.",
      },
    ],
    applications: [
      {
        title: "Ngành thực phẩm",
        desc: "Sốt, súp, kem, snack — kiểm soát độ đặc và độ bóng, không biến tính khi gia nhiệt.",
        tint: "#0a2540",
      },
      {
        title: "Ngành bánh kẹo & đồ uống",
        desc: "Tăng độ xốp, ổn định nhũ tương, cải thiện độ tan trong sản phẩm hoàn tan.",
        tint: "#1d3a5c",
      },
      {
        title: "Ngành giấy & dệt may",
        desc: "Ứng dụng làm chất kết dính, hồ vải — thay thế tinh bột tự nhiên với tính năng vượt trội.",
        tint: "#274d77",
      },
    ],
    specs: [
      { label: "Độ ẩm", value: "≤ 13.0%" },
      { label: "pH (dung dịch 10%)", value: "5.0 – 7.0" },
      { label: "Độ trắng", value: "≥ 88%" },
      { label: "Hàm lượng tro", value: "≤ 0.5%" },
      { label: "Cỡ hạt", value: "≥ 95% qua sàng 200 µm" },
      { label: "Đóng gói", value: "25 kg / bao jumbo 500 kg" },
    ],
    hero: { tint: "#0a2540" },
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
