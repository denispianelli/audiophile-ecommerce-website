import Image from 'next/image';
import { ButtonIcon } from '../ui/button-icon';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';

export default function Categories() {
  const categories = ['headphones', 'speakers', 'earphones'];
  return (
    <section className="w-full px-6 pb-[52px] pt-[92px] md:grid md:grid-cols-3 md:gap-[10px] md:px-10 md:pb-[28px] md:pt-[148px] xl:w-[1110px] xl:gap-[30px] xl:px-0 xl:pb-[100px] xl:pt-[200px]">
      {categories.map((category) => (
        <Link key={category} href={`/${category}`}>
          <Card
            key={category}
            className="group relative mb-[68px] h-[165px] md:h-[204px]"
          >
            <CardContent className="mt-[88px] text-center">
              <div className="absolute left-1/2 top-0 z-10 mx-auto h-[120px] w-[100px] -translate-x-1/2 -translate-y-[35%] xl:h-[160px] xl:w-[140px]">
                <Image
                  src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
                  alt={category}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[15px] font-bold uppercase tracking-[1.07px]">
                {category}
              </h3>
              <ButtonIcon>shop</ButtonIcon>
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  );
}
