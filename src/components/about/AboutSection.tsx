import AboutBox from "./AboutBox";

export default function AboutSection() {
  return (
    <section className="flex flex-col items-center gap-30 py-30 bg-beige px-6">
      {/* Sobre Mim Section */}
      <AboutBox>
        <div className="space-y-6 text-slate-dark">
          <div className="space-y-2">
            <h2 className="font-serif antialiased tracking-tight text-3xl md:text-4xl lg:text-5xl text-rose-dark [text-shadow:0.5px_0_0_currentColor]">
              Sobre mim
            </h2>
            <p className="text-xs md:text-sm font-bold text-slate-dark tracking-widest uppercase ">
              Quem é Cândida Dias?
            </p>
          </div>

          <div className="space-y-4 text-sm md:text-base leading-relaxed font-medium">
            <p>
              Sou formada em Relações Públicas pela UFG, com mais de 25 anos de
              atuação em comunicação estratégica de alta liderança.
            </p>
            <p>
              Ao longo da minha trajetória, trabalhei lado a lado com CEOs,
              fundadores, conselheiros e executivos, apoiando posicionamentos,
              decisões e momentos institucionais relevantes.
            </p>
            <p>
              Minha atuação une estratégia, escuta, leitura e contexto e
              construção de reputação, sempre com foco em relações consistentes
              e presença com propósito.
            </p>
            <p>
              Sou sócia-fundadora da Agenda4 Eventos, onde construí um
              repertório sólido em gestão, experiências corporativas, atuando em
              parceira com lideranças e equipes estratégicas.
            </p>
          </div>
        </div>
      </AboutBox>

      {/* Minha Missão Section */}
      <AboutBox>
        <div className="space-y-6 text-slate-dark text-left">
          <h2 className="font-serif antialiased tracking-tight text-3xl md:text-4xl lg:text-5xl text-rose-dark [text-shadow:0.5px_0_0_currentColor]">
            Minha missão
          </h2>
          <p className="text-sm md:text-xl leading-relaxed font-medium">
            Fortalecer lideranças por meio da comunicação estratégica,
            conectando pessoas, marcas e propósitos com consistência,
            sensibilidade e visão de futuro
          </p>
        </div>
      </AboutBox>
    </section>
  );
}
