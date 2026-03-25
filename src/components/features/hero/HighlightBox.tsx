"use client";

import { motion } from "framer-motion";

export default function HighlightBox() {
  return (
    <div className="relative px-6 py-4 max-w-3xl text-center">
      {/* Top Left Decoration */}
      <div className="absolute top-0 left-0">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute w-0.5 bg-rose-dark -top-4 left-0"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute h-0.5 bg-rose-dark top-0 -left-4"
        />
      </div>

      {/* Bottom Right Decoration */}
      <div className="absolute bottom-0 right-0">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute w-0.5 bg-rose-dark -bottom-4 right-0"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute h-0.5 bg-rose-dark bottom-0 -right-4"
        />
      </div>

      <p className="text-sm md:text-xl text-slate-dark leading-relaxed font-medium">
        Posicionamento, reputação e presença estratégica para CEOs, fundadores e
        executivos que desejam fortalecer sua autoridade e relevância.
      </p>
    </div>
  );
}
