import { cn } from '@/lib/utils';
import { Marquee } from '@/components/ui/marquee';

const reviews = [
  {
    img: "/images/marquee/marquee-1.jpg",
  },
  {
    img: "/images/marquee/marquee-2.png",
  },
  {
    img: "/images/marquee/marquee-3.jpg",
  },
  {
    img: "/images/marquee/marquee-4.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[220px] sm:w-[320px] cursor-pointer overflow-hidden rounded-xl sm:rounded-3xl bg-transparent",
      )}
    >
      <div className="w-full max-w-full h-[140px] sm:h-[220px] flex flex-row items-center gap-2 bg-transparent">
        <img className="" width="320" height="220" alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueePanel() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent my-4 sm:my-20">
      <Marquee pauseOnHover className="[--duration:20s] bg-transparent">
        {firstRow.map((review) => (
          <ReviewCard {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
