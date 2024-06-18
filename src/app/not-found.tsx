import { Header } from '@/components/header/page-header';
import { Separator } from '@/components/ui/separator';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex h-screen scroll-m-20 items-center justify-center ">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          404
        </h1>
        <Separator orientation="vertical" className="mx-8 h-16 " />
        <p>This page could not be found.</p>
      </main>
    </>
  );
}
