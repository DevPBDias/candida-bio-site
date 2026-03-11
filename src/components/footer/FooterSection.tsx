import socialLinks from "@/data/SocialLinks";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="relative w-full min-h-screen lg:min-h-[70dvh] flex flex-col items-center justify-end lg:justify-center overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center lg:items-start w-full max-w-7xl mx-auto px-6 pb-12 lg:pb-0 lg:px-20 gap-10 lg:gap-14">
        <div className="flex flex-col items-center gap-10 lg:gap-14">
          {/* CTA Button */}
          <a
            href="https://api.whatsapp.com/send?phone=5511991444445"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden bg-beige text-slate-dark px-10 py-3 rounded-xl font-bold text-lg md:text-xl shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105"
          >
            Vamos conversar?
          </a>

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
          <div className="flex gap-6 md:gap-8">
            {socialLinks.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={icon.path}
                  alt={icon.name}
                  width={36}
                  height={36}
                  className="w-8 h-8 md:w-10 md:h-10 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=5511991444445"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-beige text-slate-dark px-10 py-3 rounded-xl font-bold text-lg md:text-xl shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105"
          >
            Vamos conversar?
          </a>

          {/* Copyright */}
          <div className="text-beige/60 text-[10px] md:text-xs text-center space-y-1 lg:mt-16">
            <p>© 2026 Cândida Dias • Todos direitos reservados</p>
            <p>
              Desenvolvido por{" "}
              <a
                href="https://portfolio-v-final-plum.vercel.app"
                className="underline font-bold text-beige hover:text-white transition-colors"
              >
                PBDias
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
