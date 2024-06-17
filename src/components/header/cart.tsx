'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import CartIcon from './cart-icon';
import {
  decrementItem,
  incrementItem,
  removeAll,
  removeItem,
  selectCartItems,
  selectTotalItems,
  setItems,
} from '@/lib/features/cart/cartSlice';
import { useEffect } from 'react';
import Image from 'next/image';
import { currencyFormatter } from '@/services/currency-formatter';
import { ShoppingBasket, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import Portal from '../portal';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

type ItemType = {
  id: number;
  name: string;
  quantity: number;
  image: string;
  price: number;
};

export default function Cart() {
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector(selectTotalItems);

  const handleMinusClick = (item: ItemType) => {
    if (item.quantity > 1) {
      dispatch(decrementItem(item));
    }
  };

  const handlePlusClick = (item: ItemType) => {
    if (item.quantity < 99) {
      dispatch(incrementItem(item));
    }
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    dispatch(setItems(cartItems));
  }, [dispatch]);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'ghost'}
            size={'icon'}
            className="group relative hover:text-primary"
          >
            <CartIcon />
            {totalItems > 0 && (
              <span className="absolute right-2 top-3 flex h-6 w-6 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="mt-14 max-h-[70vh] w-[327px] overflow-y-auto p-6 md:w-[377px]"
        >
          <Portal>
            <div className="fixed inset-0 animate-fade-in bg-black/80" />
          </Portal>
          <div className="flex items-center justify-between">
            <DropdownMenuLabel className="text-[18px] font-bold uppercase tracking-[1.29px]">
              Cart ({totalItems})
            </DropdownMenuLabel>
            {cart.length > 0 && (
              <button
                type="button"
                className="p-2 text-[15px] font-medium text-black/50 underline hover:text-primary"
                onClick={() => dispatch(removeAll())}
              >
                Remove all
              </button>
            )}
          </div>
          {!cart.length && (
            <div className="my-6 flex flex-col items-center justify-center gap-4">
              <ShoppingBasket />
              <p className="text-center text-[15px] font-bold">
                Your cart is currently empty.
              </p>
            </div>
          )}
          {cart?.map((item) => {
            const name = item.name.trim().replace(/\s+\S*$/, '');
            const price = item.price * item.quantity;
            const formattedPrice = currencyFormatter.format(price);
            const dollarSign = formattedPrice.slice(0, 1);
            const priceValue = formattedPrice.slice(1);
            return (
              <div
                key={item.id}
                className="mt-6 grid grid-cols-[64px,75px,86px,20px] place-items-center justify-between gap-4 md:grid-cols-[64px,100px,86px,20px]"
              >
                <Image
                  src={item.image.slice(1)}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
                <div className="flex flex-col justify-self-start">
                  <p className="text-[15px] font-bold text-black">{name}</p>
                  <p className="text-[13px] font-bold text-black/50">{`${dollarSign} ${priceValue}`}</p>
                </div>
                <div className="flex w-fit items-center justify-center bg-grey text-[13px] font-bold tracking-[1px]">
                  <button
                    onClick={() => handleMinusClick(item)}
                    className="h-8 w-6 text-black/25 hover:text-primary"
                  >
                    -
                  </button>
                  <p className="flex h-8 w-6 items-center justify-center">
                    {cart.find((i) => i.id === item.id)?.quantity}
                  </p>
                  <button
                    onClick={() => handlePlusClick(item)}
                    className="h-8 w-6 text-black/25 hover:text-primary"
                  >
                    +
                  </button>
                </div>
                <Trash2
                  className="cursor-pointer hover:text-destructive"
                  size={16}
                  onClick={() => dispatch(removeItem(item.id))}
                />
              </div>
            );
          })}
          {cart.length > 0 && (
            <>
              <div className="my-6 flex items-center justify-between">
                <p className="text-[15px] font-medium uppercase text-black/50">
                  total
                </p>
                <p className="text-[18px] font-bold ">
                  {currencyFormatter.format(
                    cart.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0,
                    ),
                  )}
                </p>
              </div>
              <Link href={'/checkout'}>
                <DropdownMenuItem>
                  <Button className="w-full">checkout</Button>
                </DropdownMenuItem>
              </Link>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
