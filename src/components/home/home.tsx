import Editorial from '../editorial';
import Categories from './categories';
import FeaturedProducts from './featured-products';
import Hero from './hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="grid gap-[120px] px-6 md:gap-[96px] md:px-10 xl:gap-[200px]">
        <Categories />
        <FeaturedProducts />
        <Editorial />
      </div>
    </main>
  );
}
