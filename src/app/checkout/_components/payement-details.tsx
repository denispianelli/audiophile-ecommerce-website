import { Control } from 'react-hook-form';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import clsx from 'clsx';
import { CheckoutFormValues, FormFieldWrapper } from './form-field-wrapper';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

interface PaymentDetailsProps {
  control: Control<CheckoutFormValues>;
  paymentMethod: string;
}

export const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  control,
  paymentMethod,
}) => (
  <div className="grid gap-6">
    <div className="grid gap-4">
      <p className="subtitle">Payment Details</p>
      <FormField
        control={control}
        name="payment"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Method</FormLabel>
            <FormControl>
              <RadioGroup onValueChange={field.onChange} defaultValue="e-money">
                <FormItem
                  className={clsx(
                    'flex items-center space-x-3 space-y-0 rounded-lg border p-4',
                    {
                      'border-primary': paymentMethod === 'e-money',
                    },
                  )}
                >
                  <FormControl>
                    <RadioGroupItem value="e-money" />
                  </FormControl>
                  <FormLabel className="m-0 cursor-pointer font-bold">
                    e-Money
                  </FormLabel>
                </FormItem>
                <FormItem
                  className={clsx(
                    'flex items-center space-x-3 space-y-0 rounded-lg border p-4',
                    {
                      'border-primary': paymentMethod === 'cash',
                    },
                  )}
                >
                  <FormControl>
                    <RadioGroupItem value="cash" />
                  </FormControl>
                  <FormLabel className="m-0 cursor-pointer font-bold">
                    Cash on Delivery
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
    <FormFieldWrapper
      control={control}
      name="e-money-number"
      label="e-Money Number"
      placeholder="238521993"
      disabled={paymentMethod !== 'e-money'}
    />
    <FormFieldWrapper
      control={control}
      name="e-money-pin"
      label="e-Money Pin"
      placeholder="6891"
      disabled={paymentMethod !== 'e-money'}
    />
  </div>
);
