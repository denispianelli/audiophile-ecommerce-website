import Editorial from '@/components/editorial';
import { Header } from '@/components/header/page-header';
import Categories from '@/components/home/categories';
import { notFound } from 'next/navigation';

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string };
}) {
  const { category } = params;

  const VALID_CATEGORIES = ['headphones', 'speakers', 'earphones'];
  if (!VALID_CATEGORIES.includes(category)) return notFound();

  return (
    <>
      {children}
      <div className="grid gap-[120px] px-6 md:px-10">
        <Categories className="mt-[172px]" />
        <Editorial />
      </div>
    </>
  );
}
