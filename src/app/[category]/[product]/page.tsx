import { getProductBySlug } from '@/lib/data';
import Product from './_components/product';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';

export const generateMetadata = async ({
  params,
}: {
  params: { category: string; product: string };
}): Promise<Metadata> => {
  const { category, product } = params;
  const productData = await getProductBySlug(product);
  const VALID_CATEGORIES = ['headphones', 'speakers', 'earphones'];

  if (!VALID_CATEGORIES.includes(category)) {
    return {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  if (!productData) {
    return {
      title: 'Page not found',
      description: 'The page you are looking for does not exist.',
    };
  }

  return {
    title: `${product}`,
  };
};

export default async function Page({
  params,
}: {
  params: { category: string; product: string };
}) {
  const { category, product } = params;
  const productData = await getProductBySlug(product);
  console.log('productData:', productData);
  const VALID_CATEGORIES = ['headphones', 'speakers', 'earphones'];

  if (!VALID_CATEGORIES.includes(category)) return notFound();
  if (!productData) return notFound();

  return <Product product={productData} />;
}
