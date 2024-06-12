import Editorial from '@/components/editorial';
import Categories from '@/components/home/categories';

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    category: string;
  };
}) {
  const { category } = params;
  return (
    <>
      <div className="mb-[64px] flex h-[192px] items-end justify-center bg-black pb-8 text-[28px] font-bold uppercase tracking-[2px] text-white md:mb-[120px]">
        {category}
      </div>
      <main className="relative grid gap-[120px] px-6 md:px-10">
        {children}
        <Categories />
        <Editorial />
      </main>
    </>
  );
}
