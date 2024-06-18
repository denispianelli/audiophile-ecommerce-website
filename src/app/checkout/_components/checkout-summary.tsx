'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { selectCartItems } from '@/lib/features/cart/cartSlice';
import { useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { currencyFormatter } from '@/services/currency-formatter';
import Image from 'next/image';
import IconOrderConfirmation from './icon-order-confirmation';
import { useState } from 'react';

export default function CheckoutSummary({
  paymentMethod,
}: {
  paymentMethod: string;
}) {
  const cart = useAppSelector(selectCartItems);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = 50;
  const taxes = totalPrice * 0.2;
  const grandTotal = totalPrice + shipping;

  return (
    <Card className="bg-white xl:self-start">
      <CardHeader className="xl:pb-2">
        <CardTitle className="text-[28px] font-bold uppercase tracking-[1px] xl:text-[18px]">
          summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        {cart.length > 0 &&
          cart.map((item) => {
            const name = item.name.trim().replace(/\s+\S*$/, '');
            const price = item.price * item.quantity;
            const formattedPrice = currencyFormatter.format(price);
            const dollarSign = formattedPrice.slice(0, 1);
            const priceValue = formattedPrice.slice(1);
            return (
              <div
                key={item.id}
                className="mt-6 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-6">
                  <Image
                    src={item.image.slice(1)}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col justify-self-start">
                    <p className="text-[15px] font-bold text-black">{name}</p>
                    <p className="text-[14px] font-bold text-black/50">{`${dollarSign} ${priceValue}`}</p>
                  </div>
                </div>
                <p className="justify-self-end text-[15px] font-bold text-black/50">
                  {'x' + item.quantity}
                </p>
              </div>
            );
          })}
        <div className="mb-6 grid gap-2">
          <CheckoutSummaryTotal totalPrice={totalPrice} />
          <CheckoutSummaryShipping shipping={shipping} />
          <CheckoutSummaryTax taxes={taxes} />
        </div>
        <CheckoutSummaryGrandTotal grandTotal={grandTotal} />

        <Button
          disabled={cart.length === 0}
          className="mt-8 w-full"
          type="submit"
        >
          {paymentMethod === 'e-money' ? 'pay & continue' : 'continue'}
        </Button>
      </CardContent>
    </Card>
  );
}

const CheckoutSummarySubtitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <p className="text-[15px] uppercase leading-[25px] text-black/50">
    {children}
  </p>
);

type CheckoutSummaryPriceProps = {
  children: React.ReactNode;
  className?: string;
};

const CheckoutSummaryPrice: React.FC<CheckoutSummaryPriceProps> = ({
  children,
  className,
}) => <p className={cn('text-[18px] font-bold', className)}>{children}</p>;

const CheckoutSummaryTotal: React.FC<{ totalPrice: number }> = ({
  totalPrice,
}) => (
  <div className="mt-8 flex justify-between">
    <CheckoutSummarySubtitle>total</CheckoutSummarySubtitle>
    <CheckoutSummaryPrice>
      {currencyFormatter.format(totalPrice)}
    </CheckoutSummaryPrice>
  </div>
);

const CheckoutSummaryShipping: React.FC<{ shipping: number }> = ({
  shipping,
}) => (
  <div className="flex justify-between">
    <CheckoutSummarySubtitle>shipping</CheckoutSummarySubtitle>
    <CheckoutSummaryPrice>
      {currencyFormatter.format(shipping)}
    </CheckoutSummaryPrice>
  </div>
);

const CheckoutSummaryTax: React.FC<{ taxes: number }> = ({ taxes }) => (
  <div className="flex justify-between">
    <CheckoutSummarySubtitle>vat (included)</CheckoutSummarySubtitle>
    <CheckoutSummaryPrice>
      {currencyFormatter.format(taxes)}
    </CheckoutSummaryPrice>
  </div>
);

const CheckoutSummaryGrandTotal: React.FC<{ grandTotal: number }> = ({
  grandTotal,
}) => (
  <div className="flex justify-between">
    <CheckoutSummarySubtitle>grand total</CheckoutSummarySubtitle>
    <CheckoutSummaryPrice className="text-primary">
      {currencyFormatter.format(grandTotal)}
    </CheckoutSummaryPrice>
  </div>
);
