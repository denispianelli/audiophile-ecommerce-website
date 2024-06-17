import { z } from 'zod';

export const CheckoutFormSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required.' }).trim(),
    email: z
      .string()
      .min(1, { message: 'Email is required.' })
      .email({ message: 'Please enter a valid email.' })
      .trim(),
    phone: z.string().min(1, { message: 'Phone number is required.' }).trim(),
    address: z.string().min(1, { message: 'Address is required.' }).trim(),
    zip: z.string().min(1, { message: 'Zip code is required.' }).trim(),
    city: z.string().min(1, { message: 'City is required.' }).trim(),
    country: z.string().min(1, { message: 'Country is required.' }).trim(),
    payment: z.enum(['e-money', 'cash'], {
      required_error: 'Payment method is required.',
    }),
    'e-money-number': z.string().optional(),
    'e-money-pin': z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.payment === 'e-money') {
        return !!data['e-money-number'];
      }
      return true;
    },
    {
      path: ['e-money-number'],
      message: 'e-Money Number is required.',
    },
  )
  .refine(
    (data) => {
      if (data.payment === 'e-money') {
        return !!data['e-money-pin'];
      }
      return true;
    },
    {
      path: ['e-money-pin'],
      message: 'e-Money Pin is required.',
    },
  );
