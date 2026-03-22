"use client";

import {
  differentiators,
  processSteps,
  targetAudience,
} from "@/data/ContentText";
import ContentBox from "@/components/ui/ContentBox";
import { motion, Variants } from "framer-motion";

export default function ServicesSection() {
  const listContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="flex flex-col items-center gap-30 py-30 bg-beige px-6">
      <ContentBox title="Minha Consultoria">
        <p className="text-sm md:text-base leading-relaxed font-medium">
          Relações Públicas e estrategista de comunicação que atua com líderes,
          fundadores e executivos, em especial na construção de marca pessoal,
          com base em sua sólida experiência em eventos corporativos e design de
          experiências.
        </p>
      </ContentBox>

      {/* Serviços Section */}
      <ContentBox
        title="Serviços"
        subtitle="Assessoria de Comunicação e Posicionamento para Executivos"
      >
        <p className="text-sm md:text-base leading-relaxed font-medium">
          A assessoria tem como objetivo fortalecer a reputação, autoridade e
          presença pública de líderes e executivos, alinhando comunicação,
          posicionamento e visibilidade com os objetivos estratégicos da
          empresa.
        </p>
      </ContentBox>

      {/* Para quem é o serviço? Section */}
      <ContentBox title="Para quem é o serviço?" subtitle="">
        <p className="text-sm md:text-base leading-relaxed font-medium">
          Este trabalho é direcionado para líderes que precisam fortalecer sua
          presença estratégica.
        </p>

        <div className="space-y-4">
          <p className="text-xs md:text-sm font-black text-slate-dark tracking-widest uppercase">
            Indicado para:
          </p>
          <motion.ul
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2 text-sm md:text-base leading-relaxed font-medium"
          >
            {targetAudience.map((item, idx) => (
              <motion.li
                key={idx}
                variants={listItemVariants}
                className="flex gap-2"
              >
                <span className="text-rose-dark">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </ContentBox>

      {/* Meus diferenciais Section */}
      <ContentBox title="Meus diferenciais" subtitle="">
        <p className="text-sm md:text-base leading-relaxed font-medium">
          O trabalho é baseado em experiência prática com liderança e
          comunicação institucional.
        </p>

        <div className="space-y-4">
          <p className="text-xs md:text-sm font-black text-slate-dark tracking-widest uppercase">
            Diferenciais do trabalho:
          </p>
          <motion.ul
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2 text-sm md:text-base leading-relaxed font-medium"
          >
            {differentiators.map((item, idx) => (
              <motion.li
                key={idx}
                variants={listItemVariants}
                className="flex gap-2"
              >
                <span className="text-rose-dark">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </ContentBox>

      {/* Processo Section */}
      <ContentBox title="Processo" subtitle="">
        <p className="text-sm md:text-base leading-relaxed font-medium">
          A metodologia é estruturada para alinhar estratégia, comunicação e
          presença pública da liderança.
        </p>

        <div className="space-y-4">
          <p className="text-xs md:text-sm font-black text-slate-dark tracking-widest uppercase">
            Etapas do trabalho:
          </p>
          <motion.ol
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 text-sm md:text-base leading-relaxed"
          >
            {processSteps.map((item, idx) => (
              <motion.li
                key={idx}
                variants={listItemVariants}
                className="flex gap-3"
              >
                <span className="text-rose-dark font-black min-w-5">
                  {idx + 1}.
                </span>
                <p>
                  <strong className="font-bold text-slate-dark">
                    {item.label}:
                  </strong>{" "}
                  {item.desc}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </ContentBox>
    </section>
  );
}
