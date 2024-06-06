import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-muted/40">
      <section className="w-full">
        <div className="relative">
          <picture className="block h-full w-full">
            <source
              srcSet="/assets/home/desktop/image-hero.jpg"
              media="(min-width: 1440px)"
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
          <div className="absolute bottom-[112px] left-1/2 w-[328px] -translate-x-1/2  text-center">
            <p className="text-overline mb-4 text-white/50">new product</p>
            <h1 className="h3 mb-6 text-white">XX99 Mark II Headphones</h1>
            <p className="text-body mb-7 text-white/75">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button asChild>
              <Link href={'#'}>see product</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
