import { notFound } from "next/navigation";
import { ProductLandingClient } from "@/components/landing/ProductLandingClient";
import { PRODUCTS, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.content.vi.name,
    description: p.content.vi.tagline,
  };
}

export default async function ProductLanding({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  return <ProductLandingClient product={p} />;
}
