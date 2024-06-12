'use client';

import {
  ProductsInclude,
  ProductDescription,
  ProductFeatures,
  ProductNew,
  ProductPrice,
  ProductTitle,
  ProductGallery,
  ProductRelated,
} from '@/components/product/product';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Product({ product }: { product: any }) {
  const [value, setValue] = useState(1);
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  const handleMinusClick = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handlePlusClick = () => {
    if (value < 99) {
      setValue(value + 1);
    }
  };

  // console.log('product', product.other_products);

  return (
    <article className="grid gap-[88px] xl:mx-auto xl:w-[1110px]">
      <section className="grid gap-8">
        <Button
          className="absolute -top-[54px] w-fit p-0 text-[15px] text-black/50 hover:underline"
          variant={'ghost'}
          onClick={handleBackClick}
        >
          Go Back
        </Button>
        <div className="grid gap-8 md:grid-cols-[40%,60%] md:gap-[68px] xl:grid-cols-2">
          <picture>
            <source
              srcSet={product.image.desktop.slice(1)}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={product.image.tablet.slice(1)}
              media="(min-width: 768px)"
            />
            <img
              src={product.image.mobile.slice(1)}
              alt={product.name}
              className="rounded-lg"
            />
          </picture>
          <div className="grid gap-6 md:flex md:w-[82%] md:flex-col md:justify-center">
            <ProductNew isNew={product.new} />
            <ProductTitle name={product.name} position="left" />
            <ProductDescription
              description={product.description}
              position="left"
            />
            <ProductPrice price={product.price} />
            <div className="flex gap-4">
              <div className="flex w-fit items-center justify-center bg-grey font-bold tracking-[1px] text-[13]">
                <button
                  onClick={handleMinusClick}
                  className="h-12 w-10 text-black/25 hover:text-primary"
                >
                  -
                </button>
                <p className="flex h-12 w-10 items-center justify-center">
                  {value}
                </p>
                <button
                  onClick={handlePlusClick}
                  className="h-12 w-10 text-black/25 hover:text-primary"
                >
                  +
                </button>
              </div>
              <Button>add to cart</Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ProductFeatures features={product.features} />
      </section>
      <section>
        <ProductsInclude includes={product.item_includes} />
      </section>
      <section className="xl:mx-auto xl:w-[1110px]">
        <ProductGallery images={product.GalleryImage} name={product.name} />
      </section>
      <section className="xl:mx-auto xl:w-[1110px]">
        <ProductRelated relatedProducts={product.other_products} />
      </section>
    </article>
  );
}
