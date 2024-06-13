import Link from 'next/link';
import { SheetClose } from '../ui/sheet';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { ButtonIcon } from '../ui/button-icon';

export default function MobileNav() {
  const categories = ['headphones', 'speakers', 'earphones'];

  return (
    <nav className="text-md grid gap-[68px] pt-[44px] font-medium">
      {categories.map((category) => (
        <SheetClose key={category} asChild>
          <Link key={category} href={`/${category}`}>
            <Card
              key={category}
              className="group relative h-[165px] md:h-[204px]"
            >
              <CardContent className="mt-[88px] text-center">
                <div className="absolute left-1/2 top-0 z-10 mx-auto h-[120px] w-[100px] -translate-x-1/2 -translate-y-[35%]">
                  <Image
                    src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
                    alt={category}
                    fill
                    sizes="50vw"
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
        </SheetClose>
      ))}
    </nav>
  );
}
