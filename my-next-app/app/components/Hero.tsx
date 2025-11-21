export default function Hero() {
  return (
    <section
      className="relative w-full h-[70vh] flex flex-col items-center justify-center bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

      {/* ===== FLOATING SHAPES (no change, but animations improved) ===== */}
      <div className="absolute top-[12%] left-[72%] animate-float-slow opacity-70">
        <svg width="80" height="80" viewBox="0 0 100 100" stroke="white" fill="none" strokeWidth="3">
          <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" />
        </svg>
      </div>

      <div className="absolute top-[45%] left-[8%] animate-float opacity-70">
        <svg width="90" height="90" viewBox="0 0 100 100" stroke="white" fill="none" strokeWidth="3">
          <polygon points="30,20 70,20 90,50 70,80 30,80 10,50" />
        </svg>
      </div>

      <div className="absolute top-[28%] left-[62%] animate-float-fast opacity-75">
        <svg width="110" height="40" viewBox="0 0 150 60" stroke="white" fill="none" strokeWidth="3">
          <circle cx="30" cy="30" r="10" />
          <circle cx="120" cy="30" r="10" />
          <line x1="40" y1="30" x2="110" y2="30" />
        </svg>
      </div>

      {/* ===== MAIN TITLE ===== */}
      <h1
        className="
        text-5xl md:text-6xl font-extrabold text-center relative z-10
        bg-clip-text text-transparent 
        bg-gradient-to-r from-blue-300 via-cyan-200 to-teal-300
        drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]
        animate-fade-in
      "
      >
        Elevate Your Next.js Experience ✨
      </h1>

      {/* ===== SUBTITLE WITH GLASS BACKGROUND ===== */}
      <p
        className="
        text-lg md:text-xl text-center max-w-2xl mt-4 relative z-10 
        text-white/95 animate-slide-up
        px-6 py-3 rounded-xl backdrop-blur-md 
        bg-white/10 border border-white/20 
        shadow-lg shadow-cyan-300/20
      "
      >
        Beautiful animated molecular structures with modern text effects and smooth transitions.
      </p>

      {/* ===== SEARCH BAR ===== */}
      <div className="relative w-full max-w-md mx-auto mt-8 animate-slide-up z-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-12 pr-4 py-3 rounded-full 
          bg-white/90 text-black placeholder-gray-500
          shadow-xl backdrop-blur
          focus:outline-none focus:ring-2 focus:ring-cyan-300"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
    </section>
  );
}
