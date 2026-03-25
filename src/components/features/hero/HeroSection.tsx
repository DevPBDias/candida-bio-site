"use client";

import BackgroundImage from "./BackgroundImage";
import ProfilePhoto from "./ProfilePhoto";
import IconsNavbar from "./IconsNavbar";
import HighlightBox from "./HighlightBox";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center py-6 lg:py-18 overflow-hidden select-none">
      <BackgroundImage />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center gap-8 lg:gap-11 px-6 w-full max-w-5xl"
      >
        <motion.div variants={itemVariants}>
          <ProfilePhoto />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2"
        >
          <h1 className="font-serif antialiased text-5xl md:text-6xl lg:text-7xl text-rose-dark tracking-tight [text-shadow:0.5px_0_0_currentColor]">
            Cândida Dias
          </h1>
          <div className="text-center text-slate-dark space-y-1">
            <p className="text-sm md:text-lg font-medium">
              Relações Públicas & Comunicação Estratégica
            </p>
            <p className="text-sm md:text-lg font-medium">
              Sócia-fundadora da Agenda 4 Eventos
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <IconsNavbar />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-4">
          <HighlightBox />
        </motion.div>

        {/* Scroll arrow */}
        <motion.div
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src="/icons/chevrons-down.png"
            alt="Scroll Down"
            width={32}
            height={32}
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
