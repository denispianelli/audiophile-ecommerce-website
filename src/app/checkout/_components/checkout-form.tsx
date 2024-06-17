'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CheckoutFormSchema } from './checkout-schema';
import { BillingDetails } from './billing-details';
import { ShippingInfo } from './shipping-info';
import { PaymentDetails } from './payement-details';
import CheckoutSummary from './checkout-summary';

export function CheckoutForm() {
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
  }

  const payementMethod = form.watch('payment');

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-[97px] grid gap-8"
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
        <CheckoutSummary />
      </form>
    </Form>
  );
}
