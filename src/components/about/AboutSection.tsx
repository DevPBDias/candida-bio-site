import ContentBox from "../ui/ContentBox";

export default function AboutSection() {
  return (
    <section className="flex flex-col items-center gap-30 py-30 bg-beige px-6">
      {/* Sobre Mim Section */}
      <ContentBox title="Sobre mim" subtitle="Quem é Cândida Dias?">
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
            construção de reputação, sempre com foco em relações consistentes e
            presença com propósito.
          </p>
          <p>
            Sou sócia-fundadora da Agenda4 Eventos, onde construí um repertório
            sólido em gestão, experiências corporativas, atuando em parceira com
            lideranças e equipes estratégicas.
          </p>
        </div>
      </ContentBox>

      {/* Minha Missão Section */}
      <ContentBox title="Minha missão" subtitle="">
        <p className="text-sm md:text-base leading-relaxed font-medium text-left">
          Fortalecer lideranças por meio da comunicação estratégica, conectando
          pessoas, marcas e propósitos com consistência, sensibilidade e visão
          de futuro
        </p>
      </ContentBox>
    </section>
  );
}
