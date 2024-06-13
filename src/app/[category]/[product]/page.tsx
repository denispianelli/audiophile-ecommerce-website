import { getProductBySlug } from '@/lib/data';
import Product from './_components/product';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { category: string; product: string };
}) {
  const { category, product } = params;
  const productData = await getProductBySlug(product);
  const VALID_CATEGORIES = ['headphones', 'speakers', 'earphones'];

  if (!VALID_CATEGORIES.includes(category)) return notFound();

  return <Product product={productData} />;
}
