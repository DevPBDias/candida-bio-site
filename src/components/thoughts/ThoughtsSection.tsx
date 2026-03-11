import Image from "next/image";

export default function ThoughtsSection() {
  return (
    <section className="relative w-full min-h-[720px] lg:min-h-screen flex flex-col items-center justify-center lg:flex-row lg:justify-start overflow-hidden px-6 lg:px-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10 bg-slate-dark w-full h-full">
        {/* Mobile: Full BG Image */}
        <div className="lg:hidden relative w-full h-full">
          <Image
            src="/images/quote_bg.png"
            alt="Cândida Dias"
            fill
            className="object-cover object-center"
            quality={100}
            sizes="100vw"
            priority
          />
          {/* Subtle dark overlay for mobile */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Desktop: Full Width Container with Image on Right and Gradient */}
        <div className="hidden lg:block relative w-full h-full">
          <div className="absolute inset-0 flex">
            {/* Dark Side (Left) */}
            <div className="w-1/3 bg-slate-dark" />
            
            {/* Image Side (Right) */}
            <div className="relative w-2/3 h-full">
              <Image
                src="/images/quote_bg.png"
                alt="Cândida Dias"
                fill
                className="object-cover object-center"
                quality={100}
                sizes="66vw"
                priority
              />
              {/* Desktop Gradient Fade from the left of this container */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-dark via-slate-dark/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Quote Box Content */}
      <div className="relative z-10 w-full max-w-2xl lg:max-w-7xl mx-auto lg:px-20 flex justify-center lg:justify-start">
        <div className="relative bg-slate-dark/90 backdrop-blur-sm rounded-sm p-10 lg:p-14 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:max-w-xl">
          {/* Top Left Quote Icon */}
          <div className="absolute -top-4 -left-2 lg:left-0 lg:-top-6">
            <Image
              src="/icons/quote_icon.png"
              alt="Quote"
              width={48}
              height={48}
              className="w-10 h-10 md:w-16 md:h-16"
            />
          </div>

          {/* Bottom Right Quote Icon */}
          <div className="absolute -bottom-4 -right-2 lg:right-0 lg:-bottom-6 rotate-180">
            <Image
              src="/icons/quote_icon.png"
              alt="Quote"
              width={48}
              height={48}
              className="w-10 h-10 md:w-16 md:h-16"
            />
          </div>

          <div className="space-y-6 text-beige text-base md:text-xl leading-relaxed font-normal">
            <p className="italic">
              A imagem da liderança hoje é parte ativa da reputação da empresa.
            </p>
            <p className="italic">
              Não estar presente é um risco. Estar presente sem estratégia,
              também.
            </p>
            <p className="italic">
              Comunicação estratégica é o que sustenta credibilidade, confiança
              e coerência ao longo tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
