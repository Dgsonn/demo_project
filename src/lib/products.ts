/**
 * Single source of truth cho dữ liệu sản phẩm.
 * Khi có thêm dòng, chỉ cần thêm vào PRODUCTS — trang tự generate.
 * Nội dung hiển thị được localize qua `content.vi` / `content.en`;
 * các trường không đổi theo ngôn ngữ (màu tint, gradient) nằm ngoài `content`.
 */
import type { Lang } from "./i18n/LangContext";

export type ProductFeature = {
  title: string;
  desc: string;
};

export type ProductApplication = {
  title: string;
  desc: string;
};

export type LocalizedProduct = {
  name: string;
  tagline: string;
  description: string;
  featuresTitle: string;
  appsTitle: string;
  features: ProductFeature[];
  applications: ProductApplication[];
  specs: { label: string; value: string }[];
};

export type Product = {
  slug: "tinh-bot-san" | "bot-bien-tinh";
  /** hex color cho từng application tile, cùng thứ tự với applications[] */
  applicationTints: string[];
  hero: { tint: string };
  content: Record<Lang, LocalizedProduct>;
};

export const PRODUCTS: Product[] = [
  {
    slug: "tinh-bot-san",
    applicationTints: ["#f3d28a", "#efe7d4", "#fff7e0"],
    hero: { tint: "radial-gradient(ellipse at 30% 20%, var(--pt-cream) 0%, var(--pt-cream) 40%, var(--pt-cream-deep) 100%)" },
    content: {
      vi: {
        name: "Tinh bột sắn PT",
        tagline: "Tinh bột sắn nguyên chất cho thực phẩm và công nghiệp.",
        description:
          "Chiết xuất từ củ sắn tươi chọn lọc, tinh chế đạt chuẩn ISO 22000 và HACCP. Độ trắng cao, độ nhớt ổn định — lý tưởng cho cả chế biến thực phẩm truyền thống lẫn dây chuyền sản xuất công nghiệp.",
        featuresTitle: "Tinh khiết. Trắng sáng. Ổn định.",
        appsTitle: "Phù hợp cho mọi ứng dụng tinh bột sắn",
        features: [
          {
            title: "Độ trắng ≥ 90%",
            desc: "Tinh khiết, không tạp chất — chiết xuất từ củ sắn tươi trong 24h sau thu hoạch.",
          },
          {
            title: "Độ nhớt & độ kết dính ổn định",
            desc: "Tạo gel đều, trong — giữ kết cấu tốt qua quá trình chế biến và bảo quản.",
          },
          {
            title: "An toàn thực phẩm",
            desc: "Đạt ISO 22000 · HACCP · SGS, truy xuất được theo từng lô sản xuất.",
          },
        ],
        applications: [
          {
            title: "Bánh tráng, miến & bún",
            desc: "Độ dai, độ trong tự nhiên — không bở, không nát khi trụng hoặc phơi khô.",
          },
          {
            title: "Chế biến thực phẩm",
            desc: "Tạo đặc cho sốt, súp, nhân bánh — giữ độ bóng, không lợn cợn khi gia nhiệt.",
          },
          {
            title: "Phụ gia công nghiệp thực phẩm",
            desc: "Nguyên liệu đầu vào cho mì chính, đường glucose, mạch nha — độ tinh khiết cao.",
          },
        ],
        specs: [
          { label: "Độ ẩm", value: "≤ 13.0%" },
          { label: "Độ trắng", value: "≥ 90%" },
          { label: "Hàm lượng tinh bột", value: "≥ 85%" },
          { label: "Độ pH", value: "4.5 – 7.0" },
          { label: "Độ mịn (qua rây 100 mesh)", value: "≥ 99%" },
          { label: "Đóng gói", value: "25 kg / 50 kg" },
        ],
      },
      en: {
        name: "PT Cassava Starch",
        tagline: "Pure cassava starch for food and industrial use.",
        description:
          "Extracted from carefully selected fresh cassava roots, refined to ISO 22000 and HACCP standards. High whiteness, stable viscosity — ideal for both traditional food processing and industrial production lines.",
        featuresTitle: "Pure. Bright white. Stable.",
        appsTitle: "Suited for every cassava starch application",
        features: [
          {
            title: "Whiteness ≥ 90%",
            desc: "Pure, impurity-free — extracted from fresh cassava roots within 24h of harvest.",
          },
          {
            title: "Stable viscosity & binding",
            desc: "Forms an even, clear gel — holds texture well through processing and storage.",
          },
          {
            title: "Food safety",
            desc: "ISO 22000 · HACCP · SGS certified, traceable by production batch.",
          },
        ],
        applications: [
          {
            title: "Rice paper, glass noodles & vermicelli",
            desc: "Natural elasticity and clarity — won't crumble or fall apart when boiled or sun-dried.",
          },
          {
            title: "Food processing",
            desc: "Thickens sauces, soups, and fillings — stays glossy, no clumping when heated.",
          },
          {
            title: "Food industry additives",
            desc: "Input material for MSG, glucose syrup, and malt syrup — high purity grade.",
          },
        ],
        specs: [
          { label: "Moisture", value: "≤ 13.0%" },
          { label: "Whiteness", value: "≥ 90%" },
          { label: "Starch content", value: "≥ 85%" },
          { label: "pH", value: "4.5 – 7.0" },
          { label: "Fineness (100 mesh sieve)", value: "≥ 99%" },
          { label: "Packaging", value: "25 kg / 50 kg" },
        ],
      },
      zh: {
        name: "Phúc Thịnh 木薯淀粉",
        tagline: "适用于食品与工业用途的纯木薯淀粉。",
        description:
          "萃取自精心挑选的新鲜木薯，按照 ISO 22000 与 HACCP 标准精炼。白度高、粘度稳定——无论是传统食品加工还是工业化生产线均可适用。",
        featuresTitle: "纯净。洁白。稳定。",
        appsTitle: "适用于各类木薯淀粉应用场景",
        features: [
          {
            title: "白度 ≥ 90%",
            desc: "纯净无杂质——收获后 24 小时内以新鲜木薯萃取而成。",
          },
          {
            title: "粘度与粘结力稳定",
            desc: "形成均匀透明的凝胶——在加工与储存过程中保持良好质地。",
          },
          {
            title: "食品安全保障",
            desc: "通过 ISO 22000 · HACCP · SGS 认证，按生产批次可追溯。",
          },
        ],
        applications: [
          {
            title: "河粉皮、粉丝与米线",
            desc: "天然的韧性与透明度——无论烫煮还是晒干都不易碎裂。",
          },
          {
            title: "食品加工",
            desc: "为酱汁、汤品、馅料增稠——加热时保持光泽，不结块。",
          },
          {
            title: "食品工业添加剂",
            desc: "作为味精、葡萄糖浆、麦芽糖浆等的原料——纯度高。",
          },
        ],
        specs: [
          { label: "水分", value: "≤ 13.0%" },
          { label: "白度", value: "≥ 90%" },
          { label: "淀粉含量", value: "≥ 85%" },
          { label: "pH 值", value: "4.5 – 7.0" },
          { label: "细度（100 目筛）", value: "≥ 99%" },
          { label: "包装规格", value: "25 公斤 / 50 公斤" },
        ],
      },
    },
  },
  {
    slug: "bot-bien-tinh",
    applicationTints: ["#0a2540", "#1d3a5c", "#274d77"],
    hero: { tint: "#0a2540" },
    content: {
      vi: {
        name: "Bột biến tính PT",
        tagline: "Modified starch cho ngành thực phẩm và sản xuất công nghiệp.",
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
          },
          {
            title: "Ngành bánh kẹo & đồ uống",
            desc: "Tăng độ xốp, ổn định nhũ tương, cải thiện độ tan trong sản phẩm hoàn tan.",
          },
          {
            title: "Ngành giấy & dệt may",
            desc: "Ứng dụng làm chất kết dính, hồ vải — thay thế tinh bột tự nhiên với tính năng vượt trội.",
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
      },
      en: {
        name: "PT Modified Starch",
        tagline: "Modified starch for the food industry and industrial manufacturing.",
        description:
          "Modified through a tightly controlled physical / enzymatic process — customizable structure (light, dense, or gel) by application, ensuring stability and food safety.",
        featuresTitle: "Customizable. Stable. Safe.",
        appsTitle: "Serving a wide range of industries",
        features: [
          {
            title: "Customizable properties",
            desc: "Adjust gelatinization, thickness, and gelling ability — to specific application requirements.",
          },
          {
            title: "Stable product structure",
            desc: "Extends shelf life, prevents phase separation, improves sensory quality in storage.",
          },
          {
            title: "International standards",
            desc: "Meets FDA, Codex Alimentarius, and national food additive standards.",
          },
        ],
        applications: [
          {
            title: "Food industry",
            desc: "Sauces, soups, ice cream, snacks — controls thickness and gloss, resists breakdown when heated.",
          },
          {
            title: "Confectionery & beverages",
            desc: "Increases lightness, stabilizes emulsions, improves solubility in instant products.",
          },
          {
            title: "Paper & textile industry",
            desc: "Used as a binder and sizing agent — replaces native starch with superior performance.",
          },
        ],
        specs: [
          { label: "Moisture", value: "≤ 13.0%" },
          { label: "pH (10% solution)", value: "5.0 – 7.0" },
          { label: "Whiteness", value: "≥ 88%" },
          { label: "Ash content", value: "≤ 0.5%" },
          { label: "Particle size", value: "≥ 95% through 200 µm sieve" },
          { label: "Packaging", value: "25 kg / 500 kg jumbo bag" },
        ],
      },
      zh: {
        name: "Phúc Thịnh 变性淀粉",
        tagline: "适用于食品行业与工业制造的变性淀粉。",
        description:
          "通过严格控制的物理 / 酶法工艺进行变性处理——可根据应用需求定制结构（疏松、浓稠或凝胶状），确保稳定性与食品安全。",
        featuresTitle: "可定制。稳定。安全。",
        appsTitle: "服务于多个工业领域",
        features: [
          {
            title: "特性可定制",
            desc: "根据具体应用需求调整糊化度、稠度及凝胶能力。",
          },
          {
            title: "产品结构稳定",
            desc: "延长保质期，防止相分离，改善储存期间的感官品质。",
          },
          {
            title: "符合国际标准",
            desc: "符合 FDA、食品法典委员会（Codex Alimentarius）及国家食品添加剂标准。",
          },
        ],
        applications: [
          {
            title: "食品行业",
            desc: "酱汁、汤品、冰淇淋、休闲食品——控制稠度与光泽，加热时不易变性。",
          },
          {
            title: "糖果与饮料行业",
            desc: "提升松软度，稳定乳化体系，改善速溶产品的溶解性。",
          },
          {
            title: "造纸与纺织行业",
            desc: "用作粘合剂与上浆剂——以更优性能替代天然淀粉。",
          },
        ],
        specs: [
          { label: "水分", value: "≤ 13.0%" },
          { label: "pH 值（10% 溶液）", value: "5.0 – 7.0" },
          { label: "白度", value: "≥ 88%" },
          { label: "灰分含量", value: "≤ 0.5%" },
          { label: "粒径", value: "≥ 95% 通过 200 µm 筛" },
          { label: "包装规格", value: "25 公斤 / 500 公斤集装袋" },
        ],
      },
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
