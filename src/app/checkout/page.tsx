import { getUser } from '@/lib/dal';
import { CheckoutForm } from './_components/checkout-form';

export default async function Page() {
  return (
    <>
      <div className="mb-[65px] h-[90px] w-full bg-black xl:h-[90px]"></div>
      <main className="mx-6">
        <CheckoutForm />
      </main>
    </>
  );
}
