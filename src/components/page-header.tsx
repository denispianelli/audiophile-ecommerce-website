import Link from 'next/link';
import { LogOut, Package2, Search, Settings, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { auth, signOut } from '../auth';

import { UserMenu } from './user-menu';
import { Separator } from './ui/separator';
import Image from 'next/image';

export async function Header() {
  const session = await auth();

  return (
    <header className="supports-[backdrop-filter] fixed top-0 z-50 grid h-[90px] w-screen transform bg-black/10 backdrop-blur md:px-10 lg:h-[97px]">
      <div className="grid w-full grid-cols-[20px,auto,20px] items-center justify-items-center border-b border-b-[#979797]/20 px-6 md:px-0 lg:flex lg:justify-between xl:mx-auto xl:w-[1110px]">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:order-2 lg:flex lg:gap-6 lg:text-[13px] lg:font-bold lg:uppercase lg:tracking-[2px] lg:text-white">
          <Link href="/" className="transition-colors hover:text-primary">
            home
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
            headphones
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
            speakers
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
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
          <SheetContent side="left">
            <nav className="text-md grid gap-6 font-medium">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Dashboard
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Orders
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Products
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Customers
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Analytics
                </Link>
              </SheetClose>
              <Separator />
              {session ? (
                <>
                  <SheetClose asChild>
                    <Link
                      href="/users/profile/edit"
                      className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground"
                    >
                      Settings
                      <Settings size={20} />
                    </Link>
                  </SheetClose>
                  <form
                    className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground"
                    action={async () => {
                      'use server';
                      await signOut();
                    }}
                  >
                    <button>Logout</button>
                    <LogOut size={20} />
                  </form>
                </>
              ) : (
                <SheetClose asChild>
                  <Link
                    href="/login"
                    className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground"
                  >
                    Login
                    <User size={20} />
                  </Link>
                </SheetClose>
              )}
            </nav>
          </SheetContent>
        </Sheet>
        <Image
          src={'/assets/shared/desktop/logo.svg'}
          alt="logo"
          width={143}
          height={25}
          className="md:ml-10 md:justify-self-start lg:order-1 lg:ml-0"
        />
        <div className="flex items-center gap-4 lg:order-3">
          <div className="hidden items-center lg:inline-flex lg:gap-4">
            {session ? (
              <UserMenu />
            ) : (
              <Button asChild>
                <Link className="hidden lg:inline-flex" href="/sign_up">
                  Sign up
                </Link>
              </Button>
            )}
          </div>
          <div className="cursor-pointer">
            <Image
              src={'/assets/shared/desktop/icon-cart.svg'}
              alt="cart"
              width={23}
              height={20}
            />
            <span className="sr-only">Toggle cart menu</span>
          </div>
        </div>
      </div>
    </header>
  );
}
