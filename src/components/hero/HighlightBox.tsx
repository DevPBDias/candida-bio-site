export default function HighlightBox() {
  return (
    <div className="relative px-6 py-4 max-w-3xl text-center">
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

      <p className="text-sm md:text-xl text-slate-dark leading-relaxed font-medium">
        Posicionamento, reputação e presença institucional para CEOs,
        fundadores, executivos e palestrantes
      </p>
    </div>
  );
}
