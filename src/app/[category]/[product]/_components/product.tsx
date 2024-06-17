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
import { useToast } from '@/components/ui/use-toast';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addItem, selectCartItems } from '@/lib/features/cart/cartSlice';

export default function Product({ product }: { product: any }) {
  const [value, setValue] = useState(1);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const cart = useAppSelector(selectCartItems);

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

  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.id === product.id);
    const totalQuantity = existingItem ? existingItem.quantity + value : value;
    if (totalQuantity > 99) {
      toast({
        title: 'Cannot add item to cart',
        variant: 'destructive',
        description: `Adding ${value} ${product.name} would exceed the maximum quantity of 99`,
      });
    } else {
      dispatch(
        addItem({
          id: product.id,
          name: product.name,
          quantity: value,
          image: product.image.mobile,
          price: product.price,
        }),
      );
      toast({
        title: 'Item added to cart',
        description: `${value} ${product.name} added to cart`,
      });
    }
  };

  return (
    <>
      <div className="mb-[64px] h-[90px] w-full bg-black md:mb-[82px] xl:mb-[160px] xl:h-[97px]" />
      <main className="relative grid gap-[120px] px-6 md:px-10">
        <article className="grid gap-[88px] xl:mx-auto xl:w-[1110px]">
          <section className="grid gap-8">
            <Button
              className="absolute -top-[64px] w-fit p-0 text-[15px] text-black/50 hover:underline xl:-top-[100px]"
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
                  <Button onClick={handleAddToCart}>add to cart</Button>
                </div>
              </div>
            </div>
          </section>
          <div className="flex flex-col gap-[64px] md:gap-[96px] xl:flex-row">
            <section className="xl:w-[60%]">
              <ProductFeatures features={product.features} />
            </section>
            <section className="xl:w-[40%]">
              <ProductsInclude includes={product.item_includes} />
            </section>
          </div>
          <section className="xl:mx-auto xl:w-[1110px]">
            <ProductGallery images={product.GalleryImage} name={product.name} />
          </section>
          <section className="xl:mx-auto xl:w-[1110px]">
            <ProductRelated relatedProducts={product.other_products} />
          </section>
        </article>
      </main>
    </>
  );
}
