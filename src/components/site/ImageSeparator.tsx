import Image from "next/image";

export function ImageSeparator() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[220px] w-full md:h-[280px] lg:h-[320px]">
        <Image
          src="/images/home-separator.jpg"
          alt="Drone mission visual separator"
          fill
          className="object-cover object-center"
          priority={false}
        />
      </div>
    </section>
  );
}