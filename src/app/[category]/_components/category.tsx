import {
  ProductDescription,
  ProductNew,
  ProductTitle,
} from '@/components/product/product';
import { Button } from '@/components/ui/button';
import { getProductsByCategory } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default async function Category({ category }: { category: string }) {
  const products = await getProductsByCategory(category);
  console.log('Category ~ products:', products);

  return (
    <>
      {products.map((product, index) => (
        <article
          key={product.id}
          className={`grid gap-8 md:gap-[52px] xl:mx-auto xl:flex xl:w-[1110px] xl:gap-6 ${index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}
        >
          <picture className="xl:w-1/2">
            <source
              srcSet={`${product.categoryImage?.desktop.slice(1)}`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${product.categoryImage?.tablet.slice(1)}`}
              media="(min-width: 768px)"
            />
            <Image
              src={`${product.categoryImage?.mobile.slice(1)}`}
              width={689}
              height={352}
              alt={product.name}
              className="h-auto w-full rounded-lg"
              priority
            />
          </picture>
          <div
            className={`grid justify-items-center gap-6 md:gap-0 xl:w-[445px] xl:justify-items-start xl:py-[110px] ${index % 2 === 0 ? `xl:ml-auto` : 'xl:mr-auto'}`}
          >
            <ProductNew isNew={product.new} />
            <ProductTitle name={product.name} position="center" />
            <ProductDescription
              description={product.description}
              position="center"
            />
            <Button>
              <Link href={`${category}/${product.slug}`}>see product</Link>
            </Button>
          </div>
        </article>
      ))}
    </>
  );
}
