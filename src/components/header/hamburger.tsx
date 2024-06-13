import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import HamburgerIcon from './hamburger-icon';
import MobileNav from './mobile-nav';

export default function Hamburger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer lg:hidden">
          <HamburgerIcon />
          <span className="sr-only">Toggle navigation menu</span>
        </div>
      </SheetTrigger>
      <SheetContent side="top" className="mt-[91px]">
        <MobileNav />
      </SheetContent>
    </Sheet>
  );
}
