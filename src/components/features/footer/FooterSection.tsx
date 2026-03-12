import socialLinks from "@/data/SocialLinks";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="relative w-full min-h-screen flex flex-col items-center justify-end lg:justify-center overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 -z-10 bg-slate-dark w-full h-full">
        {/* Mobile: Top-aligned Image with Gradient */}
        <div className="lg:hidden relative w-full h-2/3">
          <Image
            src="/images/footer_profile_bg_mobile.png"
            alt="Cândida Dias"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Mobile Bottom Fade to Slate Dark */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-dark via-slate-dark/30 to-transparent" />
        </div>

        {/* Desktop: Right-aligned Image with Horizontal Gradient */}
        <div className="hidden lg:block relative w-full h-full">
          <div className="absolute inset-0 flex">
            {/* Dark Column (Left) */}
            <div className="w-1/3 bg-slate-dark" />

            {/* Image Column (Right) */}
            <div className="relative w-2/3 h-full">
              <Image
                src="/images/footer_profile_bg.png"
                alt="Cândida Dias"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Desktop Horizontal Fade from Slate Dark */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-dark via-slate-dark/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center lg:items-start w-full max-w-7xl mx-auto px-6 pb-12 lg:pb-0 lg:px-20 gap-6 lg:gap-10">
        <div className="flex flex-col items-center gap-10 lg:gap-14">
          {/* Name & Title */}
          <div className="text-center space-y-4 lg:mt-8">
            <h2 className="font-serif antialiased tracking-tight text-5xl md:text-6xl lg:text-7xl text-beige [text-shadow:0.6px_0_0_currentColor]">
              Cândida Dias
            </h2>
            <div className="space-y-2 text-beige/90 text-sm md:text-lg font-medium tracking-wide">
              <p>Relações Públicas & Comunicação Estratégica</p>
              <p>Sócia-fundadora da Agenda4 Eventos</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-2 lg:gap-4">
            {socialLinks.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 border-2 border-beige rounded-sm px-10 py-2 flex flex-row items-center gap-8 w-full"
              >
                <Image
                  src={icon.path}
                  alt={icon.name}
                  width={16}
                  height={16}
                  className="w-4 h-4 md:w-5 md:h-5 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
                <p className="text-beige text-sm md:text-base">{icon.name}</p>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-beige/60 text-[10px] md:text-xs text-center space-y-1 lg:mt-16">
            <p>© 2026 Cândida Dias • Todos direitos reservados</p>
            <p>
              Desenvolvido por{" "}
              <a
                href="https://portfolio-v-final-plum.vercel.app"
                className="underline font-bold text-beige hover:text-white transition-colors"
              >
                DevPBDias
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
