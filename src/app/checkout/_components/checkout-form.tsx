'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { set, z } from 'zod';
import { CheckoutFormSchema } from './checkout-schema';
import { BillingDetails } from './billing-details';
import { ShippingInfo } from './shipping-info';
import { PaymentDetails } from './payement-details';
import CheckoutSummary from './checkout-summary';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import IconOrderConfirmation from './icon-order-confirmation';
import Image from 'next/image';
import { currencyFormatter } from '@/services/currency-formatter';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { removeAll, selectCartItems } from '@/lib/features/cart/cartSlice';
import { useState } from 'react';

export function CheckoutForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(1);
  const router = useRouter();
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const form = useForm<z.infer<typeof CheckoutFormSchema>>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      zip: '',
      city: '',
      country: '',
      payment: 'e-money',
      'e-money-number': '',
      'e-money-pin': '',
    },
  });

  async function onSubmit(values: z.infer<typeof CheckoutFormSchema>) {
    console.log('values', values);
    setIsOpen(true);
  }

  const payementMethod = form.watch('payment');

  const handleBackClick = () => {
    router.back();
  };

  const handleGoHomeClick = () => {
    router.push('/');
    dispatch(removeAll());
  };

  const handleSeeMoreClick = () => {
    if (visibleItems === 1) {
      setVisibleItems(cart.length);
    } else {
      setVisibleItems(1);
    }
  };

  return (
    <>
      <Button
        className="absolute -top-[54px] w-fit p-0 text-[15px] text-black/50 hover:text-primary"
        variant={'ghost'}
        onClick={handleBackClick}
      >
        Go Back
      </Button>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mb-[97px] grid gap-8 xl:grid-cols-[2fr,1fr]"
        >
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-[28px] font-bold uppercase tracking-[1px]">
                Checkout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8">
                <BillingDetails control={form.control} />
                <ShippingInfo control={form.control} />
                <PaymentDetails
                  control={form.control}
                  paymentMethod={payementMethod}
                />
              </div>
            </CardContent>
          </Card>
          <CheckoutSummary paymentMethod={payementMethod} />
        </form>
      </Form>
      <AlertDialog open={isOpen}>
        <AlertDialogContent className="mx-auto max-h-[80vh] w-[327px] overflow-y-auto rounded-lg">
          <IconOrderConfirmation />
          <AlertDialogHeader>
            <AlertDialogTitle className="text-start text-[24px] font-bold uppercase leading-[28px] tracking-[0.86px]">
              thank you <br /> for your order
            </AlertDialogTitle>
            <AlertDialogDescription className="text-start">
              You will receive an email confirmation shortly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid">
            {cart?.slice(0, visibleItems).map((item) => {
              const name = item.name.trim().replace(/\s+\S*$/, '');
              const price = item.price * item.quantity;
              const formattedPrice = currencyFormatter.format(price);
              const dollarSign = formattedPrice.slice(0, 1);
              const priceValue = formattedPrice.slice(1);
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg bg-grey px-6 pt-4"
                >
                  <div className="flex items-center gap-4">
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
            <div className="flex w-full justify-center bg-grey">
              <Button
                className="w-[80%] border-t px-6 text-[12px] font-bold text-black/50"
                variant={'ghost'}
                onClick={handleSeeMoreClick}
              >
                {visibleItems === 1
                  ? `and ${cart?.length - 1} others items(s)`
                  : 'view less'}
              </Button>
            </div>
            <div className="grid gap-2 rounded-b-lg bg-black px-6 py-5">
              <p className="text-[15px] font-medium uppercase text-white/50">
                grand total
              </p>
              <p className="text-[18px] font-bold text-white">
                {currencyFormatter.format(totalPrice)}
              </p>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleGoHomeClick} className="w-full">
              back to home
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
