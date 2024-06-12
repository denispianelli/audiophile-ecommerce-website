import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import LoginForm from './_components/login-form';

export default async function Page() {
  const session = await auth();

  if (session) {
    redirect('/');
  }

  return (
    <>
      <div className="h-[90px] w-full bg-black md:h-[97px]"></div>
      <main>
        <LoginForm />
      </main>
    </>
  );
}
