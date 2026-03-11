import BackgroundImage from "./BackgroundImage";
import ProfilePhoto from "./ProfilePhoto";
import MainTitle from "./MainTitle";
import Subtitle from "./Subtitle";
import IconsNavbar from "./IconsNavbar";
import HighlightBox from "./HighlightBox";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center pt-20 pb-16 overflow-hidden select-none">
      <BackgroundImage />

      <div className="z-10 flex flex-col items-center px-6 w-full max-w-5xl">
        <ProfilePhoto />
        <MainTitle />
        <Subtitle />
        <IconsNavbar />
        <HighlightBox />

        {/* Scroll arrow */}
        <div className="mt-8">
          <Image
            src="/icons/chevrons-down.png"
            alt="Scroll Down"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12 animate-bounce cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
