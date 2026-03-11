import Image from "next/image";

export default function FooterSection() {
  const socialIcons = [
    { src: "/icons/whatsapp.png", alt: "WhatsApp", link: "#" },
    { src: "/icons/linkedin.png", alt: "LinkedIn", link: "#" },
    {
      src: "/icons/email.png",
      alt: "Email",
      link: "mailto:contato@exemplo.com",
    },
    { src: "/icons/instagram.png", alt: "Instagram", link: "#" },
  ];

  return (
    <footer className="relative w-full h-screen flex flex-col items-center justify-end overflow-hidden">
      {/* Layer 1: Full Background Image */}
      <div className="absolute inset-0 -z-30 w-full h-3/5">
        <Image
          src="/images/main_profile.png"
          alt="Cândida Dias"
          fill
          className="object-cover object-top w-full h-full"
          priority
        />
      </div>

      {/* Layer 2: Specific Gradient Overlay (Figma: 34% @ 40% -> 54% @ 100%) */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(47, 49, 64, 0) 20%, rgba(47, 49, 64, 0.4) 34%, #2F3140 54%, #2F3140 100%)",
        }}
      />

      {/* Layer 3: Main Content Area */}
      <div className="z-10 flex flex-col items-center w-full max-w-5xl px-6 pb-12 gap-10">
        {/* CTA Button */}
        <a
          href="https://api.whatsapp.com/send?phone=5511999999999"
          className="bg-beige text-slate-dark px-10 py-3 rounded-xl font-bold text-lg md:text-xl shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105 click:scale-105"
        >
          Vamos conversar?
        </a>

        {/* Name & Title */}
        <div className="text-center space-y-4">
          <h2 className="font-serif antialiased tracking-tight text-4xl md:text-5xl lg:text-6xl text-beige [text-shadow:0.6px_0_0_currentColor]">
            Cândida Dias
          </h2>
          <div className="space-y-2 text-beige/90 text-sm md:text-lg font-medium tracking-wide">
            <p>Relações Públicas & Comunicação Estratégica</p>
            <p>Sócia-fundadora da Agenda4 Eventos</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 md:gap-8">
          {socialIcons.map((icon, idx) => (
            <a
              key={idx}
              href={icon.link}
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={36}
                height={36}
                className="w-8 h-8 md:w-10 md:h-10 brightness-0 invert"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-beige/60 text-[10px] md:text-xs text-center space-y-1">
          <p>© 2026 Cândida Dias • Todos direitos reservados</p>
          <p>
            Desenvolvido por{" "}
            <a href="#" className="underline font-bold text-beige">
              DevPBDias
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
