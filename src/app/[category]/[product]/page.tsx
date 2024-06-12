import { getProductBySlug } from '@/lib/data';
import Product from './_components/product';

export default async function Page({
  params,
}: {
  params: { category: string; product: string };
}) {
  const { category, product } = params;
  const productData = await getProductBySlug(product);

  return <Product product={productData} />;
}
