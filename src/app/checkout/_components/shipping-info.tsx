import { Control } from 'react-hook-form';
import { CheckoutFormValues, FormFieldWrapper } from './form-field-wrapper';

interface ShippingInfoProps {
  control: Control<CheckoutFormValues>;
}

export const ShippingInfo: React.FC<ShippingInfoProps> = ({ control }) => (
  <div className="grid gap-6">
    <div className="grid gap-4">
      <p className="subtitle">Shipping Info</p>
      <FormFieldWrapper
        control={control}
        name="address"
        label="Your Address"
        placeholder="1137 Williams Avenue"
      />
    </div>
    <FormFieldWrapper
      control={control}
      name="zip"
      label="ZIP Code"
      placeholder="10001"
    />
    <FormFieldWrapper
      control={control}
      name="city"
      label="City"
      placeholder="New York"
    />
    <FormFieldWrapper
      control={control}
      name="country"
      label="Country"
      placeholder="United States"
    />
  </div>
);
