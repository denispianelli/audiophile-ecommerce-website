import { capitalizeWords } from '@/services/capitalize-words';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../ui/button';
import Link from 'next/link';

export function ProductNew({ isNew }: { isNew: boolean }) {
  return (
    <>{isNew && <p className="text-overline md:text-[12px]">new product</p>}</>
  );
}

type textPosition = 'left' | 'center' | 'right';

export function ProductTitle({
  name,
  position,
}: {
  name: string;
  position: textPosition;
}) {
  return (
    <h2
      className={clsx('h4 xl:px-0 xl:text-start', {
        'text-center': position === 'center',
        'text-right': position === 'right',
      })}
    >
      {name}
    </h2>
  );
}

export function ProductDescription({
  description,
  position,
}: {
  description: string;
  position: textPosition;
}) {
  return (
    <p
      className={clsx('text-body text-black/50 xl:px-0 xl:text-start', {
        'text-center': position === 'center',
        'text-right': position === 'right',
      })}
    >
      {description}
    </p>
  );
}

export function ProductPrice({ price }: { price: number }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  const formattedPrice = formatter.format(price);
  const dollarSign = formattedPrice.slice(0, 1);
  const priceValue = formattedPrice.slice(1);
  return (
    <p className="text-[18px] font-bold">{`${dollarSign} ${priceValue}`}</p>
  );
}

export function ProductFeatures({ features }: { features: string }) {
  const formattedFeatures = features.split('\n\n').map((feature) => (
    <div key={uuidv4()}>
      <p className="text-body text-black/50">{feature}</p>
      <br />
    </div>
  ));

  return (
    <div>
      <h3 className="mb-6 text-[24px] font-bold uppercase md:text-[32px]">
        Features
      </h3>
      {formattedFeatures}
    </div>
  );
}

export function ProductsInclude({ includes }: { includes: any }) {
  return (
    <div className="md:flex">
      <h3 className="mb-6 text-[24px] font-bold uppercase md:w-[50%] md:text-[32px]">
        in the box
      </h3>
      <ul>
        {includes.map((include: any) => (
          <li
            key={include.item_includes.id}
            className="flex items-center gap-4"
          >
            <p className="text-body font-bold text-primary">
              {include.item_includes.quantity}x
            </p>
            <p className="text-body text-black/50">
              {capitalizeWords(include.item_includes.item)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Images = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export function ProductGallery({
  images,
  name,
}: {
  images: Images[];
  name: string;
}) {
  return (
    <div
      className="grid gap-[20px] md:grid-flow-col md:grid-cols-[40%,auto]
		md:grid-rows-2"
    >
      {images.map((image, index) => {
        return (
          <picture
            key={uuidv4()}
            className={clsx({
              'md:col-start-1': index === 0,
              'md:col-start-1 md:row-start-2': index === 1,
              'md:row-span-2': index === 2,
            })}
          >
            <source
              srcSet={image.desktop.slice(1)}
              media="(min-width: 1280px)"
            />
            <source srcSet={image.tablet.slice(1)} media="(min-width: 768px)" />
            <img
              src={image.mobile.slice(1)}
              alt={name}
              className="rounded-lg"
            />
          </picture>
        );
      })}
    </div>
  );
}

export function ProductRelated({ relatedProducts }: { relatedProducts: any }) {
  return (
    <>
      <h3 className="mb-6 text-center text-[24px] font-bold uppercase md:text-[32px]">
        you may also like
      </h3>
      <div className="grid gap-[56px] md:grid-cols-3 md:gap-[11px]">
        {relatedProducts.map((relatedProduct: any) => {
          let categoryName =
            relatedProduct.other_product.slug.split('-')[
              relatedProduct.other_product.slug.split('-').length - 1
            ];
          if (categoryName === 'speaker') categoryName = 'speakers';
          console.log('{relatedProducts.map ~ slug:', categoryName);

          return (
            <div key={uuidv4()} className="grid justify-items-center gap-8">
              <picture>
                <source
                  srcSet={`/assets/shared/desktop/image-${relatedProduct.other_product.slug}.jpg`}
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet={`/assets/shared/tablet/image-${relatedProduct.other_product.slug}.jpg`}
                  media="(min-width: 768px)"
                />
                <img
                  srcSet={`/assets/shared/mobile/image-${relatedProduct.other_product.slug}.jpg`}
                  alt={relatedProduct.other_product.name}
                  className="rounded-lg"
                />
              </picture>
              <h4 className="text-center text-[24px] font-bold uppercase tracking-[1.71px]">
                {relatedProduct.other_product.name}
              </h4>
              <Button>
                <Link
                  href={`/${categoryName}/${relatedProduct.other_product.slug}`}
                >
                  see product
                </Link>
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
}
