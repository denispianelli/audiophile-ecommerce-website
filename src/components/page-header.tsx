import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { auth, signOut } from '../auth';

import { UserMenu } from './user-menu';
import Image from 'next/image';
import { ButtonIcon } from './ui/button-icon';
import { Card, CardContent } from './ui/card';
import Logo from '../../public/assets/shared/desktop/logo.svg';
import { User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export async function Header() {
  const session = await auth();
  const categories = ['headphones', 'speakers', 'earphones'];

  return (
    <header className="supports-[backdrop-filter] absolute z-50 grid h-[90px] w-screen transform bg-transparent backdrop-blur md:px-10 lg:h-[97px]">
      <div className="relative flex items-center justify-between border-b border-b-[#979797]/20 px-6 md:px-0 lg:flex lg:justify-between xl:mx-auto xl:w-[1110px]">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2 lg:gap-6 lg:text-[13px] lg:font-bold lg:uppercase lg:tracking-[2px] lg:text-white">
          <Link href="/" className="transition-colors hover:text-primary">
            home
          </Link>
          <Link
            href="/headphones"
            className="transition-colors hover:text-primary"
          >
            headphones
          </Link>
          <Link
            href="/speakers"
            className="transition-colors hover:text-primary"
          >
            speakers
          </Link>
          <Link
            href="/earphones"
            className="transition-colors hover:text-primary"
          >
            earphones
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <div className="cursor-pointer lg:hidden">
              <Image
                src={'/assets/shared/tablet/icon-hamburger.svg'}
                alt="hamburger"
                width={16}
                height={15}
              />
              <span className="sr-only">Toggle navigation menu</span>
            </div>
          </SheetTrigger>
          <SheetContent side="top" className="mt-[91px]">
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
          </SheetContent>
        </Sheet>
        <Link href={'/'} className="md:justify-self-start">
          <Image
            src={Logo}
            alt="logo"
            style={{ width: '143px', height: 'auto' }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[97px] md:ml-10 lg:left-0 lg:order-1 lg:ml-0 lg:translate-x-0"
          />
        </Link>
        <div className="flex items-center gap-2 lg:order-3">
          <div className="inline-flex items-center lg:gap-4">
            {session ? (
              <UserMenu />
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={'ghost'}
                    size={'icon'}
                    className="text-white/100"
                  >
                    <Link className="hover:text-primary" href="/sign_up">
                      <User />
                    </Link>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href={'/login'}>
                    <DropdownMenuItem className="cursor-pointer font-bold uppercase">
                      Login
                    </DropdownMenuItem>
                  </Link>
                  <Link href={'/sign_up'}>
                    <DropdownMenuItem className="cursor-pointer font-bold uppercase">
                      Sign up
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          <div className="cursor-pointer hover:text-primary">
            <svg
              className="group"
              width="23"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-primary"
                d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
            <span className="sr-only">Toggle cart menu</span>
          </div>
        </div>
      </div>
    </header>
  );
}
