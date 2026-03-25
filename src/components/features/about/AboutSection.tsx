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
    <section id="about" className="flex flex-col items-center gap-30 py-30 bg-beige px-6">
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
            Formada em Relações Públicas pela UFG, com mais de 25 anos de
            atuação em comunicação estratégica junto à alta liderança.
          </motion.p>
          <motion.p variants={itemVariants}>
            Ao longo da trajetória, atuação ao lado de CEOs, fundadores,
            conselheiros e executivos em decisões, posicionamentos e momentos
            institucionais que exigem clareza, leitura de contexto e
            responsabilidade.
          </motion.p>
          <motion.p variants={itemVariants}>
            A atuação integra estratégia, escuta e construção de reputação, com
            foco em relações consistentes e presença com propósito.
          </motion.p>
          <motion.p variants={itemVariants}>
            Como sócia-fundadora da Agenda 4 Eventos, desenvolvi uma base sólida
            em experiências corporativas e gestão, que amplia a visão na
            construção de posicionamentos estratégicos.
          </motion.p>
        </motion.div>
      </ContentBox>

      {/* Minha Missão Section */}
      <ContentBox title="Minha missão" subtitle="">
        <p className="text-sm md:text-base leading-relaxed font-medium text-left">
          Fortalecer lideranças por meio da comunicação estratégica, construindo
          posicionamentos consistentes, com clareza, sensibilidade e visão de
          longo prazo.
        </p>
      </ContentBox>
    </section>
  );
}
