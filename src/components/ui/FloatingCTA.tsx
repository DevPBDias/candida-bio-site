"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import socialLinks from "@/data/SocialLinks";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappLink = socialLinks.find((link) => link.id === 1)?.url;

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const footerSection = document.getElementById("footer");

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
        } else {
          const aboutRect = aboutSection?.getBoundingClientRect();
          if (aboutRect && aboutRect.top < window.innerHeight) {
            setIsVisible(true);
          }
        }
      },
      { threshold: 0.1 },
    );

    if (aboutSection) aboutObserver.observe(aboutSection);
    if (footerSection) footerObserver.observe(footerSection);

    return () => {
      if (aboutSection) aboutObserver.unobserve(aboutSection);
      if (footerSection) footerObserver.unobserve(footerSection);
    };
  }, []);

  if (!whatsappLink) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.21, 1.11, 0.81, 0.99]
          }}
          className="fixed bottom-6 right-6 z-50 pointer-events-none"
        >
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto flex items-center gap-2 px-5 py-3 rounded-full 
                       bg-rose-medium/90 backdrop-blur-md text-white shadow-lg 
                       border border-white/20 transition-colors duration-300
                       hover:bg-rose-dark active:bg-rose-dark group"
          >
            <span className="text-sm font-medium tracking-wide">Fale Comigo</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
