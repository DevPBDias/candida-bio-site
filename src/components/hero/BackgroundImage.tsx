import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="absolute inset-0 -z-10 h-1/2 w-full overflow-hidden">
      <Image
        src="/images/bg_hero.png"
        alt="Background Hero"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-beige" />
    </div>
  );
}
