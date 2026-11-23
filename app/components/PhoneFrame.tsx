import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Rendered CSS width in px; height follows the 1206×2622 screenshot ratio. */
  width?: number;
};

/** A minimal iPhone bezel around a 1206×2622 simulator screenshot. */
export function PhoneFrame({ src, alt, priority, className = "", width = 300 }: Props) {
  const height = Math.round((width * 2622) / 1206);
  return (
    <figure
      className={`relative shrink-0 rounded-[2.6rem] border border-white/15 bg-black p-[7px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)] ${className}`}
      style={{ width: width + 14 }}
    >
      <div className="overflow-hidden rounded-[2.2rem] bg-deep">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={`${width}px`}
          priority={priority}
          className="block h-auto w-full"
        />
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[18px] h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black"
      />
    </figure>
  );
}
