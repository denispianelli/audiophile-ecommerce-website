import Link from 'next/link';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export default function FeaturedProducts() {
  return (
    <section className="w-full">
      <Card className="relative mb-[24px] flex h-[600px] flex-col items-center justify-between overflow-hidden bg-primary px-6 py-[55px] md:mb-[32px] md:h-[720px] md:py-[64px] xl:mx-auto xl:mb-[48px] xl:h-[560px] xl:w-[1110px] xl:flex-row xl:justify-end xl:px-[94px]">
        <div className="z-10 mx-auto mb-[32px] h-[207px] w-[173px] md:h-[237px] md:w-[198px] xl:absolute xl:-bottom-11 xl:left-[130px] xl:h-[493px] xl:w-[410px] ">
          <picture className="block h-full w-full">
            <source
              srcSet="/assets/home/desktop/image-speaker-zx9.png"
              media="(min-width: 1280px)"
            />
            <source
              srcSet="/assets/home/tablet/image-speaker-zx9.png"
              media="(min-width: 768px)"
            />
            <img
              className="h-full w-full"
              src="/assets/home/mobile/image-speaker-zx9.png"
              alt="header"
            />
          </picture>
        </div>
        <div className="absolute top-5 z-0 h-[279px] w-[279px] rounded-full border border-white/30 md:-top-[70px] md:h-[472px] md:w-[472px] xl:left-[100px] xl:top-[200px]" />
        <div className="absolute top-0 z-0 h-[320px] w-[320px] rounded-full border border-white/30 md:-top-[107px] md:h-[542px] md:w-[542px] xl:left-[70px] xl:top-[170px]" />
        <div className="absolute -top-[120px] z-0 h-[558px] w-[558px] rounded-full border border-white/30 md:-top-[290px] md:h-[944px] md:w-[944px] xl:-left-[150px] xl:-top-[50px]" />
        <div className="flex flex-col items-center justify-between xl:h-[303px] xl:items-start">
          <h3 className="md:h1 mb-6 h-[80px] w-[280px] text-center text-[36px] font-bold uppercase leading-[40px] tracking-[1.29px] text-white xl:h-[116px] xl:text-left">
            zx9 <br /> speaker
          </h3>
          <p className="text-body mb-6 text-center text-white/75 md:mb-10 md:w-[343px] xl:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            asChild
            variant={'outline'}
            className="z-10 border-none bg-black text-white hover:bg-[#4C4C4C]"
          >
            <Link href={'/speakers/zx9-speaker'}>see product</Link>
          </Button>
        </div>
      </Card>

      <Card className="relative mb-6 md:mb-8 xl:mx-auto xl:mb-12 xl:w-[1110px]">
        <div className=" xl:w-[1110px]">
          <picture className="block h-full w-full">
            <source
              srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
              media="(min-width: 1280px)"
            />
            <source
              srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
              media="(min-width: 768px)"
            />
            <img
              className="h-full w-full rounded-lg"
              src="/assets/home/mobile/image-speaker-zx7.jpg"
              alt="header"
            />
          </picture>
        </div>
        <div className="absolute left-6 top-[30%] md:left-[62px] xl:left-[95px]">
          <h3 className=" mb-[32px] text-[28px] font-bold uppercase tracking-[2px]">
            zx7 speaker
          </h3>
          <Button asChild variant={'outline'}>
            <Link href={'/speakers/zx7-speaker'}>see product</Link>
          </Button>
        </div>
      </Card>

      <div className="grid grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-1 xl:mx-auto xl:w-[1110px]">
        <div className="z-10 mx-auto">
          <picture className="block h-full w-full">
            <source
              srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
              media="(min-width: 1280px)"
            />
            <source
              srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
              media="(min-width: 768px)"
            />
            <img
              className="h-full w-full rounded-lg"
              src="/assets/home/mobile/image-earphones-yx1.jpg"
              alt="header"
            />
          </picture>
        </div>
        <Card className="py-[38px] pl-6 md:pl-[41px] md:pt-[101px] xl:pl-[95px]">
          <h3 className="mb-[32px] text-[28px] font-bold uppercase tracking-[2px]">
            yx1 earphones
          </h3>
          <Button asChild variant={'outline'}>
            <Link href={'/earphones/yx1-earphones'}>see product</Link>
          </Button>
        </Card>
      </div>
    </section>
  );
}
