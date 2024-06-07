import Categories from './categories';
import Editorial from './editorial';
import FeaturedProducts from './featured-products';
import Hero from './hero';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-muted/40">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Editorial />
    </main>
  );
}
