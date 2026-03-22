"use client";

import ContentBox from "@/components/ui/ContentBox";
import { motion, Variants } from "framer-motion";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="flex flex-col items-center gap-30 py-30 bg-beige px-6">
      {/* Sobre Mim Section */}
      <ContentBox title="Sobre mim" subtitle="Quem é Cândida Dias?">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 text-sm md:text-base leading-relaxed font-medium"
        >
          <motion.p variants={itemVariants}>
            Sou formada em Relações Públicas pela UFG, com mais de 25 anos de
            atuação em comunicação estratégica de alta liderança.
          </motion.p>
          <motion.p variants={itemVariants}>
            Ao longo da minha trajetória, trabalhei lado a lado com CEOs,
            fundadores, conselheiros e executivos, apoiando posicionamentos,
            decisões e momentos institucionais relevantes.
          </motion.p>
          <motion.p variants={itemVariants}>
            Minha atuação une estratégia, escuta, leitura e contexto e
            construção de reputação, sempre com foco em relações consistentes e
            presença com propósito.
          </motion.p>
          <motion.p variants={itemVariants}>
            Sou sócia-fundadora da Agenda4 Eventos, onde construí um repertório
            sólido em gestão, experiências corporativas, atuando em parceira com
            lideranças e equipes estratégicas.
          </motion.p>
        </motion.div>
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
