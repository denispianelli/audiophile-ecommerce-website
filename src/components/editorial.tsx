import Image from 'next/image';
import bestGear from '../../public/assets/shared/mobile/image-best-gear.jpg';

export default function Editorial() {
  return (
    <section className="mb-[120px] w-full md:mb-[96px] xl:mx-auto xl:mb-[200px] xl:w-[1110px]">
      <article className="xl:grid xl:grid-cols-2">
        <picture className="mb-10 block h-full w-full xl:col-start-2">
          <source
            srcSet="/assets/shared/desktop/image-best-gear.jpg"
            media="(min-width: 1280px)"
          />
          <source
            srcSet="/assets/shared/tablet/image-best-gear.jpg"
            media="(min-width: 768px)"
          />
          <Image
            alt="best-gear"
            src={bestGear}
            className="h-auto w-full rounded-lg"
          />
        </picture>
        <div className="xl:col-start-1 xl:row-start-1 xl:py-[146px] xl:pr-[125px]">
          <h2 className="md:h3 mb-8 text-center text-[28px] font-bold uppercase tracking-[1px] md:px-24 xl:pl-0 xl:text-start">
            bringing you the <span className="text-primary">best</span> audio
            gear
          </h2>
          <p className="text-body text-center text-black/50 md:px-[58px] xl:w-[445px] xl:px-0 xl:text-start">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </article>
    </section>
  );
}
