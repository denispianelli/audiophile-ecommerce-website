import { z } from 'zod';
import { CheckoutFormSchema } from './checkout-schema';
import { Control } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

export type CheckoutFormValues = z.infer<typeof CheckoutFormSchema>;

interface FormFieldWrapperProps {
  control: Control<CheckoutFormValues>;
  name: keyof CheckoutFormValues;
  label: string;
  placeholder: string;
  disabled?: boolean;
  className?: string;
}

const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({
  control,
  name,
  label,
  placeholder,
  disabled,
  className,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className={className}>
        <div className="flex justify-between">
          <FormLabel>{label}</FormLabel>
          <FormMessage />
        </div>
        <FormControl>
          <FormInput placeholder={placeholder} disabled={disabled} {...field} />
        </FormControl>
      </FormItem>
    )}
  />
);

export { FormFieldWrapper };
