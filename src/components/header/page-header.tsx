import Link from 'next/link';

import { UserMenu } from '../user-menu';

import Logo from './logo';
import DesktopNav from './desktop-nav';
import UserAuth from './user-auth';
import Hamburger from './hamburger';
import Cart from './cart';
import { auth } from '@/auth';
import { cn } from '@/lib/utils';

export async function Header({ className }: { className?: string }) {
  const session = await auth();

  return (
    <header
      className={cn(
        'supports-[backdrop-filter] fixed top-0 z-50 grid h-[90px] w-screen transform bg-black/30 backdrop-blur md:px-10 lg:h-[97px]',
        className,
      )}
    >
      <div className="relative flex items-center justify-between border-b border-b-[#979797]/20 px-6 md:px-0 lg:flex lg:justify-between xl:mx-auto xl:w-[1110px]">
        <DesktopNav />
        <Hamburger />
        <Link href={'/'}>
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
