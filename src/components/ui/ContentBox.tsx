"use client";

import { motion, Variants } from "framer-motion";

interface ContentBoxProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ContentBox({
  title,
  subtitle,
  children,
}: ContentBoxProps) {
  const boxVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full max-w-2xl px-6 py-12 md:px-10 md:py-16 bg-rose-light/20"
    >
      {/* Top Left Decoration */}
      <div className="absolute top-0 left-0">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute w-0.5 bg-rose-dark -top-4 left-0"
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute h-0.5 bg-rose-dark top-0 -left-4"
        />
      </div>

      {/* Bottom Right Decoration */}
      <div className="absolute bottom-0 right-0">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute w-0.5 bg-rose-dark -bottom-4 right-0"
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute h-0.5 bg-rose-dark bottom-0 -right-4"
        />
      </div>

      <div className="relative z-10 space-y-6 text-slate-dark">
        <div className="space-y-2 text-left">
          <h2 className="font-serif antialiased tracking-tight text-3xl md:text-4xl lg:text-5xl text-rose-dark [text-shadow:0.5px_0_0_currentColor]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs md:text-sm font-bold text-slate-dark tracking-widest uppercase">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4 text-sm md:text-base leading-relaxed font-medium">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
