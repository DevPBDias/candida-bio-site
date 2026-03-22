"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfilePhoto() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative h-[240px] w-[240px] md:h-80 md:w-80  overflow-hidden rounded-full border-4 border-beige shadow-2xl"
    >
      <Image
        src="/images/main_profile.png"
        alt="Cândida Dias"
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
}
