import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="absolute inset-0 -z-10 h-1/2 md:h-2/3 w-full overflow-hidden">
      <Image
        src="/images/bg_hero_mobile.png"
        alt="Background Hero"
        fill
        sizes="100vw"
        className="lg:hidden object-cover"
        priority
      />
      <Image
        src="/images/bg_hero.png"
        alt="Background Hero"
        fill
        sizes="100vw"
        className="hidden lg:block object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-beige" />
    </div>
  );
}
