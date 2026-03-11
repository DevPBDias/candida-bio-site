import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="relative h-[280px] w-[280px] md:h-80 md:w-80  overflow-hidden rounded-full border-4 border-beige shadow-2xl">
      <Image
        src="/images/quote_bg.png"
        alt="Cândida Dias"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
