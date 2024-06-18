import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';

export default function CategorySkeleton() {
  return (
    <div className="grid gap-[120px] px-6 md:px-10">
      <div className="grid gap-8 md:gap-[52px] xl:mx-auto xl:w-[1110px] xl:grid-cols-2 xl:gap-6">
        <div className="flex min-h-[352px] min-w-[327px] md:hidden xl:flex">
          <AspectRatio ratio={1 / 1}>
            <Skeleton className="h-full w-full" />
          </AspectRatio>
        </div>
        <div className="hidden min-h-[352px] min-w-[327px] md:flex xl:hidden">
          <AspectRatio ratio={16 / 9}>
            <Skeleton className="h-full w-full" />
          </AspectRatio>
        </div>
        <div className="grid justify-items-center gap-6 xl:ml-[86px] xl:content-center xl:justify-items-start">
          <Skeleton className="h-5 w-[30%]" />
          <Skeleton className="h-9 w-[70%] xl:h-[95px]" />
          <Skeleton className="h-20 w-[100%]" />
          <Skeleton className="h-12 w-[160px] rounded-none" />
        </div>
      </div>
    </div>
  );
}
