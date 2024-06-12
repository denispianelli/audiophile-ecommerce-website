import { notFound } from 'next/navigation';
import Category from './_components/category';

export default function Page({ params }: { params: { category: string } }) {
  const { category } = params;
  const VALID_CATEGORIES = ['headphones', 'speakers', 'earphones'];

  if (!VALID_CATEGORIES.includes(category)) return notFound();

  return <Category category={category} />;
}
