import { Suspense } from 'react';
import Products from './products';
import CategorySkeleton from './category-skeleton';

export default async function Category({ category }: { category: string }) {
  return (
    <>
      <div className="mb-[64px] flex h-[192px] items-end justify-center bg-black pb-8 text-[28px] font-bold uppercase tracking-[2px] text-white md:mb-[120px] md:h-[336px] md:pb-[97px]">
        {category}
      </div>
      <main className="grid gap-[120px] px-6 md:px-10">
        <Suspense fallback={<CategorySkeleton />}>
          <Products category={category} />
        </Suspense>
      </main>
    </>
  );
}
