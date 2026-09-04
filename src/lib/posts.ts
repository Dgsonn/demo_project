/**
 * Single source of truth cho bài viết Tin tức.
 * Khi có bài mới, chỉ cần thêm vào POSTS — trang danh sách và sitemap tự cập nhật.
 *
 * Khác với products.ts, nội dung bài viết KHÔNG localize theo t.about /
 * t.nav.* — tin tức do khách hàng (Bên A) cung cấp và đăng tải bằng tiếng Việt
 * (xem thoả thuận Phụ lục 01: "nội dung do Bên B đăng tải theo yêu cầu của
 * Bên A", không xây trình soạn thảo/dịch riêng). Khung trang (tiêu đề mục,
 * nút "Đọc tiếp"...) vẫn theo i18n như phần còn lại của site.
 */

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  /** ISO date, dùng để sắp xếp và hiển thị */
  date: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "chung-nhan-iso-22000-day-chuyen-moi",
    category: "Tin công ty",
    title: "Phúc Thái đạt chứng nhận ISO 22000:2018 cho dây chuyền sản xuất mới",
    date: "2026-07-15",
    excerpt:
      "Dây chuyền chế biến tinh bột sắn mới của Phúc Thái chính thức được cấp chứng nhận ISO 22000:2018, nâng công suất và củng cố tiêu chuẩn an toàn thực phẩm.",
    body: [
      "Sau hơn sáu tháng đầu tư và vận hành thử nghiệm, dây chuyền chế biến tinh bột sắn mới của Phúc Thái đã chính thức được cấp chứng nhận ISO 22000:2018 — tiêu chuẩn quốc tế về hệ thống quản lý an toàn thực phẩm.",
      "Dây chuyền mới giúp nâng công suất chế biến, đồng thời bổ sung các điểm kiểm soát tới hạn (CCP) trong từng công đoạn, từ tiếp nhận nguyên liệu, rửa, nghiền, tách bã cho đến sấy và đóng gói thành phẩm.",
      "Việc đạt chứng nhận không chỉ là yêu cầu bắt buộc với nhiều khách hàng công nghiệp và xuất khẩu, mà còn là cam kết của Phúc Thái về chất lượng ổn định giữa các lô sản xuất, giúp khách hàng an tâm hơn khi đưa nguyên liệu vào chuỗi sản xuất của mình.",
      "Trong thời gian tới, Phúc Thái tiếp tục lộ trình hoàn thiện hệ thống kiểm định nội bộ, hướng tới các chứng nhận bổ sung theo yêu cầu của thị trường xuất khẩu.",
    ],
  },
  {
    slug: "bot-bien-tinh-la-gi",
    category: "Kiến thức ngành",
    title: "Bột biến tính là gì? Vì sao ngành thực phẩm ngày càng ưa chuộng?",
    date: "2026-06-02",
    excerpt:
      "Tìm hiểu quy trình biến tính tinh bột sắn bằng phương pháp vật lý và enzyme, cùng lý do loại nguyên liệu này được nhiều nhà máy thực phẩm lựa chọn thay cho tinh bột tự nhiên.",
    body: [
      "Tinh bột tự nhiên có một số hạn chế khi dùng trong sản xuất công nghiệp quy mô lớn: độ nhớt không ổn định khi gia nhiệt, dễ thoái hóa khi bảo quản lạnh, và khó kiểm soát kết cấu theo từng loại sản phẩm.",
      "Bột biến tính giải quyết các hạn chế này bằng cách xử lý tinh bột qua phương pháp vật lý hoặc enzyme được kiểm soát chặt chẽ, giúp tùy biến độ hồ hóa, độ đặc và khả năng tạo gel theo đúng yêu cầu của từng ứng dụng — mà không cần dùng đến hóa chất biến tính.",
      "Nhờ vậy, bột biến tính giữ được cấu trúc ổn định hơn qua quá trình chế biến, cấp đông – rã đông, và bảo quản dài ngày. Đây là lý do nhiều nhà máy sản xuất sốt, súp, kem, bánh kẹo và đồ uống hòa tan chuyển sang sử dụng bột biến tính thay cho tinh bột thường.",
      "Tại Phúc Thái, dòng bột biến tính được sản xuất theo tiêu chuẩn FDA và Codex Alimentarius, phù hợp cho cả ngành thực phẩm lẫn một số ứng dụng công nghiệp như giấy và dệt may.",
    ],
  },
  {
    slug: "5-tieu-chi-danh-gia-chat-luong-tinh-bot-san",
    category: "Kiến thức ngành",
    title: "5 tiêu chí đánh giá chất lượng tinh bột sắn trước khi nhập hàng",
    date: "2026-05-10",
    excerpt:
      "Độ trắng, độ ẩm, độ nhớt, độ mịn và khả năng truy xuất theo lô — năm chỉ tiêu nhà mua hàng công nghiệp nên kiểm tra kỹ trước khi ký hợp đồng cung ứng dài hạn.",
    body: [
      "1. Độ trắng: chỉ tiêu ảnh hưởng trực tiếp đến cảm quan sản phẩm cuối, đặc biệt với thực phẩm cần màu sắc tự nhiên, trong suốt khi chế biến. Tinh bột sắn đạt chuẩn thường có độ trắng từ 90% trở lên.",
      "2. Độ ẩm: độ ẩm cao làm tăng nguy cơ vón cục, nấm mốc trong quá trình vận chuyển và lưu kho dài ngày. Mức khuyến nghị là dưới 13%.",
      "3. Độ nhớt và độ kết dính: quyết định khả năng tạo gel, độ dai và độ trong của thành phẩm — đặc biệt quan trọng với bánh tráng, miến, bún.",
      "4. Độ mịn: hạt tinh bột càng mịn, khả năng hòa tan và phân tán trong dung dịch càng đồng đều, hạn chế lợn cợn khi gia nhiệt.",
      "5. Khả năng truy xuất theo lô: mỗi lô hàng cần có mã số riêng, kèm phiếu COA (Certificate of Analysis) thể hiện đầy đủ các chỉ tiêu lý hóa và vi sinh, giúp bên mua đối chiếu khi có sự cố hoặc kiểm tra định kỳ.",
      "Trước khi ký hợp đồng cung ứng dài hạn, khách hàng nên yêu cầu mẫu thử và phiếu COA của ít nhất ba lô sản xuất gần nhất để đánh giá độ ổn định chất lượng giữa các lô, thay vì chỉ dựa vào một mẫu đơn lẻ.",
    ],
  },
  {
    slug: "phuc-thai-tham-gia-hoi-cho-xuat-khau",
    category: "Tin công ty",
    title: "Phúc Thái tham gia hội chợ triển lãm ngành thực phẩm khu vực",
    date: "2026-03-20",
    excerpt:
      "Gian hàng của Phúc Thái giới thiệu dòng sản phẩm tinh bột sắn và bột biến tính đạt chuẩn xuất khẩu tới các nhà mua hàng quốc tế.",
    body: [
      "Trong khuôn khổ hội chợ triển lãm ngành thực phẩm khu vực, gian hàng của Phúc Thái đã giới thiệu tới khách tham quan hai dòng sản phẩm chủ lực: tinh bột sắn nguyên chất và bột biến tính, cùng đầy đủ hồ sơ chứng nhận ISO 22000, HACCP và FDA.",
      "Sự kiện là dịp để đội ngũ kinh doanh của Phúc Thái trao đổi trực tiếp với các nhà mua hàng công nghiệp đến từ nhiều thị trường, lắng nghe yêu cầu kỹ thuật cụ thể cho từng ứng dụng — từ chế biến thực phẩm truyền thống đến các dây chuyền sản xuất công nghiệp quy mô lớn.",
      "Phúc Thái dự kiến tiếp tục tham gia các hội chợ chuyên ngành trong thời gian tới, đồng thời mở rộng năng lực sản xuất để đáp ứng nhu cầu ngày càng tăng từ thị trường xuất khẩu.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Bài viết mới nhất trước, dùng cho trang danh sách và teaser trang chủ. */
export function getSortedPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}
