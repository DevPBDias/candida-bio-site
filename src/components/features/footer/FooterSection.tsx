"use client";

import socialLinks from "@/data/SocialLinks";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function FooterSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer
      id="footer"
      className="relative w-full min-h-screen flex flex-col items-center justify-end lg:justify-center overflow-hidden"
    >
      {/* Background Container */}
      <div className="absolute inset-0 -z-10 bg-slate-dark w-full h-full">
        {/* Mobile: Top-aligned Image with Gradient */}
        <div className="lg:hidden relative w-full h-2/3">
          <Image
            src="/images/footer_profile_bg_mobile.png"
            alt="Cândida Dias"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Mobile Bottom Fade to Slate Dark */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-dark via-slate-dark/30 to-transparent" />
        </div>

        {/* Desktop: Right-aligned Image with Horizontal Gradient */}
        <div className="hidden lg:block relative w-full h-full">
          <div className="absolute inset-0 flex">
            {/* Dark Column (Left) */}
            <div className="w-2/5 bg-slate-dark" />

            {/* Image Column (Right) */}
            <div className="relative w-3/5 h-full">
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/footer_profile_bg.png"
                  alt="Cândida Dias"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>
              {/* Desktop Horizontal Fade from Slate Dark */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-dark via-slate-dark/45 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center lg:items-start w-full max-w-7xl mx-auto px-6 pb-4 lg:pb-0 lg:px-12 gap-6 lg:gap-10"
      >
        <div className="flex flex-col items-center gap-8 lg:gap-14">
          {/* Name & Title */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 lg:mt-8"
          >
            <h2 className="font-serif antialiased tracking-tight text-5xl md:text-6xl lg:text-7xl text-beige [text-shadow:0.6px_0_0_currentColor]">
              Vamos conversar?
            </h2>
            <p className="text-sm md:text-lg font-medium max-w-xl text-beige">
              Se fizer sentido para o seu momento, será um prazer entender seu
              contexto e avaliar como posso contribuir de forma estratégica.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-1.5 lg:gap-3"
          >
            {socialLinks.map((icon) => (
              <motion.a
                key={icon.id}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                className="border-2 border-beige rounded-sm px-10 py-2 flex flex-row items-center gap-8 w-full transition-colors hover:bg-beige/10"
              >
                <Image
                  src={icon.path}
                  alt={icon.name}
                  width={16}
                  height={16}
                  className="w-4 h-4 md:w-5 md:h-5 brightness-0 invert opacity-80"
                />
                <p className="text-beige text-sm md:text-base">{icon.name}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="text-beige/60 text-[10px] md:text-xs text-center space-y-1 lg:mt-16"
          >
            <p>© 2026 Cândida Dias • Todos os direitos reservados</p>
            <p>
              Desenvolvido por{" "}
              <a
                href="https://portfolio-devpbdias.vercel.app"
                className="underline font-bold text-beige hover:text-white transition-colors"
              >
                DevPBDias
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
