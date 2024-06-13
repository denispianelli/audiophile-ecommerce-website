import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import CartIcon from './cart-icon';

export default function Cart() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer hover:text-primary">
          <CartIcon />
          <span className="sr-only">Toggle cart menu</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-14 w-[327px] p-6">
        <div className="flex items-center justify-between">
          <DropdownMenuLabel className="text-[18px] font-bold uppercase tracking-[1.29px]">
            Cart (2)
          </DropdownMenuLabel>
          <button
            type="button"
            className="p-2 text-[15px] font-medium text-black/50 underline"
          >
            Remove all
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
