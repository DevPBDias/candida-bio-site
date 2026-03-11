import AboutBox from "../about/AboutBox";

export default function ServicesSection() {
  return (
    <section className="flex flex-col items-center gap-30 py-30 bg-beige px-6">
      {/* Serviços Section */}
      <AboutBox>
        <div className="space-y-4 text-slate-dark">
          <div className="space-y-2">
            <h2 className="font-serif antialiased tracking-tight text-3xl md:text-4xl lg:text-5xl text-rose-dark [text-shadow:0.5px_0_0_currentColor]">
              Serviços
            </h2>
            <p className="text-xs md:text-sm font-black text-slate-dark tracking-widest uppercase">
              TRABALHO SOB MEDIDA COM FOCO ESTRATÉGICO
            </p>
          </div>

          <p className="text-sm md:text-base leading-relaxed font-medium">
            Ajudo CEOs, fundadores e executivos a estruturarem sua presença
            pública de forma estratégica, fortalecendo reputação, autoridade e
            credibilidade.
          </p>

          <div className="space-y-4">
            <p className="text-xs md:text-sm font-black text-slate-dark tracking-widest uppercase">
              Serviços Principais:
            </p>
            <ul className="space-y-4 text-sm md:text-base leading-relaxed">
              <li className="flex gap-2">
                <span className="text-rose-dark mt-1.5">•</span>
                <p>
                  <strong className="font-bold text-slate-dark">
                    Diagnóstico de imagem e posicionamento:
                  </strong>{" "}
                  Análise estratégica da presença atual do líder: narrativa,
                  visibilidade e alinhamento com os objetivos do negócio.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-dark mt-1.5">•</span>
                <p>
                  <strong className="font-bold text-slate-dark">
                    Direcionamento de posicionamento:
                  </strong>{" "}
                  Definição de mensagens, tom de comunicação e foco estratégico
                  para fortalecer a autoridade da liderança.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-dark mt-1.5">•</span>
                <p>
                  <strong className="font-bold text-slate-dark">
                    Curadoria de conteúdo estratégico:
                  </strong>{" "}
                  Orientação e supervisão de conteúdos para LinkedIn, site,
                  biografia e apresentações, mantendo coerência entre
                  comunicação pessoal e institucional.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-dark mt-1.5">•</span>
                <p>
                  <strong className="font-bold text-slate-dark">
                    Presença e visibilidade estratégica:
                  </strong>{" "}
                  Identificação de oportunidades relevantes em eventos,
                  entrevistas e ambientes de networking que ampliem a autoridade
                  e o alcance da liderança.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </AboutBox>

      {/* Para quem é o serviço? Section */}
      <AboutBox>
        <div className="space-y-6 text-slate-dark text-left">
          <h2 className="font-serif antialiased tracking-tight text-3xl md:text-4xl lg:text-5xl text-rose-dark [text-shadow:0.5px_0_0_currentColor]">
            Para quem é o serviço?
          </h2>
          <p className="text-sm md:text-base leading-relaxed font-medium">
            Este trabalho é direcionado para líderes que precisam fortalecer sua
            presença estratégica.
          </p>

          <div className="space-y-4">
            <p className="text-xs md:text-sm font-black text-slate-dark tracking-widest uppercase">
              Indicado para:
            </p>
            <ul className="space-y-2 text-sm md:text-base leading-relaxed font-medium">
              {[
                "CEOs e fundadores",
                "Executivos em posições de liderança",
                "Profissionais em transição para cargos executivos",
                "Lideranças que atuam ou desejam atuar em conselhos",
                "Executivos que representam a empresa em ambientes estratégicos",
                "Palestrantes e porta-vozes institucionais",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-rose-dark">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AboutBox>

      {/* Meus diferenciais Section */}
      <AboutBox>
        <div className="space-y-6 text-slate-dark text-left">
          <h2 className="font-serif antialiased tracking-tight text-3xl md:text-4xl lg:text-5xl text-rose-dark [text-shadow:0.5px_0_0_currentColor]">
            Meus diferenciais
          </h2>
          <p className="text-sm md:text-base leading-relaxed font-medium">
            O trabalho é baseado em experiência prática com liderança e
            comunicação institucional.
          </p>

          <div className="space-y-4">
            <p className="text-xs md:text-sm font-black text-slate-dark tracking-widest uppercase">
              Diferenciais do trabalho:
            </p>
            <ul className="space-y-2 text-sm md:text-base leading-relaxed font-medium">
              {[
                "Mais de 25 anos de experiência em comunicação estratégica",
                "Experiência direta com CEOs, fundadores e executivos",
                "Olhar estratégico e personalizado para reputação e posicionamento",
                "Atuação integrada com marketing, relações institucionais e liderança",
                "Experiência com empresas de diferentes portes e setores",
                "Construção de presença baseada em coerência, propósito e estratégia",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-rose-dark">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AboutBox>

      {/* Processo Section */}
      <AboutBox>
        <div className="space-y-6 text-slate-dark text-left">
          <h2 className="font-serif antialiased tracking-tight text-3xl md:text-4xl lg:text-5xl text-rose-dark [text-shadow:0.5px_0_0_currentColor]">
            Processo
          </h2>
          <p className="text-sm md:text-base leading-relaxed font-medium">
            A metodologia é estruturada para alinhar estratégia, comunicação e
            presença pública da liderança.
          </p>

          <div className="space-y-4">
            <p className="text-xs md:text-sm font-black text-slate-dark tracking-widest uppercase">
              Etapas do trabalho:
            </p>
            <ol className="space-y-4 text-sm md:text-base leading-relaxed">
              {[
                {
                  label: "Diagnóstico estratégico",
                  desc: "Análise da presença atual, narrativa e posicionamento do líder.",
                },
                {
                  label: "Definição de posicionamento",
                  desc: "Construção ou ajuste da mensagem estratégica da liderança.",
                },
                {
                  label: "Estruturação da comunicação",
                  desc: "Orientação para conteúdos, materiais institucionais e canais de presença.",
                },
                {
                  label: "Estratégia de visibilidade",
                  desc: "Mapeamento de oportunidades estratégicas de exposição e relacionamento.",
                },
                {
                  label: "Acompanhamento estratégico",
                  desc: "Suporte contínuo para garantir coerência e fortalecimento da reputação.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-rose-dark font-black min-w-5">
                    {idx + 1}.
                  </span>
                  <p>
                    <strong className="font-bold text-slate-dark">
                      {item.label}:
                    </strong>{" "}
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </AboutBox>
    </section>
  );
}
