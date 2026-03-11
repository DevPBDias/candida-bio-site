import Image from "next/image";

export default function ThoughtsSection() {
  return (
    <section className="relative w-full min-h-[720px] lg:min-h-screen flex flex-col items-center justify-end overflow-hidden px-6">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10 bg-slate-dark w-full h-full">
        <Image
          src="/images/footer_profile_bg_mobile.png"
          alt="Cândida Dias"
          fill
          className="lg:hidden object-cover w-full h-full"
          quality={100}
          sizes="100vw"
          priority
        />
        <Image
          src="/images/footer_profile_bg.png"
          alt="Cândida Dias"
          fill
          className="hidden lg:block object-cover object-top"
          sizes="100vw"
          priority
        />
        {/* Subtle dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/10 lg:bg-transparent" />
      </div>

      {/* Quote Box Content */}
      <div className="relative z-10 w-full mb-[30px] md:mb-[60px] max-w-2xl lg:max-w-[720px]">
        <div className="relative bg-slate-dark/90 backdrop-blur-sm rounded-sm p-8 lg:p-12 h-[240px] lg:h-[300px] flex items-center shadow-2xl">
          {/* Top Left Quote Icon */}
          <div className="absolute -top-3 -left-2">
            <Image
              src="/icons/quote_icon.png"
              alt="Quote"
              width={40}
              height={40}
              className="w-10 h-10 md:w-16 md:h-16"
            />
          </div>

          {/* Bottom Right Quote Icon */}
          <div className="absolute -bottom-3 -right-2 rotate-180">
            <Image
              src="/icons/quote_icon.png"
              alt="Quote"
              width={40}
              height={40}
              className="w-10 h-10 md:w-16 md:h-16"
            />
          </div>

          <div className="space-y-4 text-beige text-sm md:text-lg leading-relaxed font-medium">
            <p className="italic">
              "A imagem da liderança hoje é parte ativa da reputação da
              empresa."
            </p>
            <p className="italic">
              "Não estar presente é um risco. Estar presente sem estratégia,
              também."
            </p>
            <p className="italic">
              "Comunicação estratégica é o que sustenta credibilidade, confiança
              e coerência ao longo tempo."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
