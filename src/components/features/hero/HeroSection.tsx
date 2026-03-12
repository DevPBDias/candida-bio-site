import BackgroundImage from "./BackgroundImage";
import ProfilePhoto from "./ProfilePhoto";
import IconsNavbar from "./IconsNavbar";
import HighlightBox from "./HighlightBox";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-dvh-screen w-full flex-col items-center pt-20 pb-16 overflow-hidden select-none">
      <BackgroundImage />

      <div className="z-10 flex flex-col items-center gap-11 px-6 w-full max-w-5xl">
        <ProfilePhoto />
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-serif antialiased text-5xl md:text-6xl lg:text-7xl text-rose-dark tracking-tight [text-shadow:0.5px_0_0_currentColor]">
            Cândida Dias
          </h1>
          <div className="text-center text-slate-dark space-y-1">
            <p className="text-sm md:text-lg font-medium">
              Relações Públicas & Comunicação Estratégica
            </p>
            <p className="text-sm md:text-lg font-medium">
              Sócia-fundadora da Agenda4 Eventos
            </p>
          </div>
        </div>
        <IconsNavbar />
        <HighlightBox />

        {/* Scroll arrow */}
        <Image
          src="/icons/chevrons-down.png"
          alt="Scroll Down"
          width={32}
          height={32}
          className="w-8 h-8 md:w-10 md:h-10 animate-bounce cursor-pointer"
        />
      </div>
    </section>
  );
}
