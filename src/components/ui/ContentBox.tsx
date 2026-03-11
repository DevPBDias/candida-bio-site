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
    </div>
  );
}
