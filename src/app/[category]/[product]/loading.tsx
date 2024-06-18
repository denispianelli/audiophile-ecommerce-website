import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <>
      <div className="mb-[64px] h-[90px] w-full bg-black md:mb-[82px] xl:mb-[160px] xl:h-[97px]" />
      <div className="grid gap-[120px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-[40%,60%] md:gap-[52px] xl:mx-auto xl:w-[1110px] xl:gap-6">
          <div className="flex min-h-[352px] min-w-[327px] md:hidden xl:flex">
            <AspectRatio ratio={1 / 1}>
              <Skeleton className="h-full w-full" />
            </AspectRatio>
          </div>
          <div className="hidden min-h-[352px] min-w-[327px] md:flex md:min-h-[470px] md:min-w-[275px] xl:hidden">
            <AspectRatio ratio={16 / 9}>
              <Skeleton className="h-full w-full" />
            </AspectRatio>
          </div>
          <div className="grid justify-items-start gap-6 xl:ml-[86px] xl:content-center xl:justify-items-start">
            <Skeleton className="h-5 w-[30%]" />
            <Skeleton className="h-9 w-[70%] md:h-[95px]" />
            <Skeleton className="h-20 w-[100%] md:w-[80%]" />
            <Skeleton className="h-5 w-[20%]" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-[120px] rounded-none" />
              <Skeleton className="h-12 w-[160px] rounded-none" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
