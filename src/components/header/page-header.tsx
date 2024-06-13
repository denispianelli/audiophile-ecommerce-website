import Link from 'next/link';

import { UserMenu } from '../user-menu';

import Logo from '../header/logo';
import DesktopNav from '../header/desktop-nav';
import UserAuth from '../header/user-auth';
import Hamburger from '../header/hamburger';
import Cart from '../header/cart';
import { auth } from '@/auth';

export async function Header() {
  const session = await auth();

  return (
    <header className="supports-[backdrop-filter] absolute z-50 grid h-[90px] w-screen transform bg-transparent backdrop-blur md:px-10 lg:h-[97px]">
      <div className="relative flex items-center justify-between border-b border-b-[#979797]/20 px-6 md:px-0 lg:flex lg:justify-between xl:mx-auto xl:w-[1110px]">
        <DesktopNav />
        <Hamburger />
        <Link href={'/'} className="md:justify-self-start">
          <Logo />
        </Link>
        <div className="flex items-center gap-2 lg:order-3">
          {session ? <UserMenu /> : <UserAuth />}
          <Cart />
        </div>
      </div>
    </header>
  );
}
