import Editorial from '@/components/editorial';
import Categories from '@/components/home/categories';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="grid gap-[120px] px-6 md:px-10">
        <Categories />
        <Editorial />
      </div>
    </>
  );
}
