import { CheckoutForm } from './_components/checkout-form';

export default async function Page() {
  return (
    <>
      <div className="mb-[65px] h-[90px] w-full bg-black md:mb-[97px] xl:h-[97px]"></div>
      <main className="relative mx-6 xl:mx-auto xl:w-[1110px]">
        <CheckoutForm />
      </main>
    </>
  );
}
