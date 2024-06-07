import Link from 'next/link';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <section className="w-full">
      <div className="relative">
        <picture className="block h-full w-full">
          <source
            srcSet="/assets/home/desktop/image-hero.jpg"
            media="(min-width: 1280px)"
          />
          <source
            srcSet="/assets/home/tablet/image-header.jpg"
            media="(min-width: 768px)"
          />
          <img
            className="h-full w-full"
            src="/assets/home/mobile/image-header.jpg"
            alt="header"
          />
        </picture>
        <div className="absolute left-1/2 top-[33%] w-[328px] -translate-x-1/2 text-center md:w-[379px] xl:w-[1110px] xl:pr-[731px] xl:text-start">
          <p className="text-overline mb-4 text-white/50 md:mb-6">
            new product
          </p>
          <h1 className="h3 md:h1 mb-6 text-white">XX99 Mark II Headphones</h1>
          <p className="text-body mb-7 text-white/75 md:mb-10 xl:pr-[7px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button asChild>
            <Link href={'#'}>see product</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
