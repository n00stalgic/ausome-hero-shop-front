const CosmicDivider = () => (
  <div className="relative h-px w-full overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(90deg, transparent 0%, rgba(138,79,188,0.3) 20%, rgba(255,191,57,0.4) 50%, rgba(79,151,199,0.3) 80%, transparent 100%)`,
      }}
    />
    {/* Center star accent */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cosmic-gold shadow-glow" />
  </div>
);

export default CosmicDivider;
