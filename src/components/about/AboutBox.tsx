import React from "react";

interface AboutBoxProps {
  children: React.ReactNode;
}

export default function AboutBox({ children }: AboutBoxProps) {
  return (
    <div className="relative w-full max-w-2xl px-6 py-12 md:px-10 md:py-16  bg-rose-light/20">
      {/* Background with low opacity */}
      <div className="absolute inset-x-8 inset-y-8 md:inset-x-12 md:inset-y-12 bg-rose-light/10 -z-10" />

      {/* Top Left Decoration */}
      <div className="absolute top-0 left-0">
        <div className="absolute h-24 w-0.5 bg-rose-dark -top-4 left-0" />
        <div className="absolute w-24 h-0.5 bg-rose-dark top-0 -left-4" />
      </div>

      {/* Bottom Right Decoration */}
      <div className="absolute bottom-0 right-0">
        <div className="absolute h-24 w-0.5 bg-rose-dark -bottom-4 right-0" />
        <div className="absolute w-24 h-0.5 bg-rose-dark bottom-0 -right-4" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
