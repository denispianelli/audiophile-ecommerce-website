import { notFound } from 'next/navigation';
import Category from './_components/category';
import { Metadata } from 'next';

export const generateMetadata = ({
  params,
}: {
  params: { category: string };
}): Metadata => {
  const { category } = params;
  const VALID_CATEGORIES = ['headphones', 'speakers', 'earphones'];

  if (!VALID_CATEGORIES.includes(category)) {
    return {
      title: 'Page not found',
      description: 'The page you are looking for does not exist.',
    };
  }

  return {
    title: `${category}`,
  };
};

export default function Page({ params }: { params: { category: string } }) {
  const { category } = params;
  const VALID_CATEGORIES = ['headphones', 'speakers', 'earphones'];

  if (!VALID_CATEGORIES.includes(category)) return notFound();

  return <Category category={category} />;
}
