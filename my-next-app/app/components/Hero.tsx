export default function Hero() {
  return (
    <section
      className="relative w-full h-[50vh] flex flex-col items-center justify-center bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Benzene */}
      <div className="absolute top-[12%] left-[72%] travel-random-1 opacity-80">
        <svg width="80" height="80" viewBox="0 0 100 100" stroke="white" fill="none" strokeWidth="3">
          <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" />
        </svg>
      </div>

      {/* Cyclohexane */}
      <div className="absolute top-[45%] left-[8%] travel-random-2 opacity-75">
        <svg width="90" height="90" viewBox="0 0 100 100" stroke="white" fill="none" strokeWidth="3">
          <polygon points="30,20 70,20 90,50 70,80 30,80 10,50" />
        </svg>
      </div>

      {/* Ethane */}
      <div className="absolute top-[28%] left-[62%] travel-random-3 opacity-85">
        <svg width="110" height="40" viewBox="0 0 150 60" stroke="white" fill="none" strokeWidth="3">
          <circle cx="30" cy="30" r="10" />
          <circle cx="120" cy="30" r="10" />
          <line x1="40" y1="30" x2="110" y2="30" />
        </svg>
      </div>

      {/* Isopropyl alcohol */}
      <div className="absolute top-[18%] left-[22%] travel-random-1 opacity-80">
        <svg width="150" height="90" viewBox="0 0 200 120" stroke="white" fill="none" strokeWidth="3">
          <circle cx="50" cy="60" r="10" />
          <circle cx="100" cy="60" r="10" />
          <circle cx="150" cy="60" r="10" />
          <circle cx="170" cy="40" r="8" />
          <line x1="60" y1="60" x2="90" y2="60" />
          <line x1="110" y1="60" x2="140" y2="60" />
          <line x1="150" y1="60" x2="165" y2="45" />
        </svg>
      </div>

      {/* Methane */}
      <div className="absolute bottom-[12%] left-[55%] travel-random-2 opacity-70">
        <svg width="90" height="90" viewBox="0 0 100 100" stroke="white" fill="none" strokeWidth="3">
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="15" r="6" />
          <circle cx="85" cy="50" r="6" />
          <circle cx="50" cy="85" r="6" />
          <circle cx="15" cy="50" r="6" />
          <line x1="50" y1="25" x2="50" y2="40" />
          <line x1="65" y1="50" x2="60" y2="50" />
          <line x1="50" y1="60" x2="50" y2="75" />
          <line x1="40" y1="50" x2="25" y2="50" />
        </svg>
      </div>

      {/* Atom cluster */}
      <div className="absolute bottom-[22%] left-[18%] travel-random-3 opacity-60">
        <svg width="80" height="50" viewBox="0 0 100 60" stroke="white" fill="none" strokeWidth="3">
          <circle cx="20" cy="30" r="8" />
          <circle cx="50" cy="15" r="8" />
          <circle cx="80" cy="30" r="8" />
          <line x1="28" y1="30" x2="42" y2="20" />
          <line x1="58" y1="20" x2="72" y2="30" />
        </svg>
      </div>

      {/* Main Content */}
      <h1 className="text-5xl font-extrabold mb-4 text-center relative z-10">
        Welcome to Your Next.js Project 🚀
      </h1>

      <p className="text-lg max-w-xl text-center text-gray-200 relative z-10 mb-6">
        Multi-directional floating molecular structures in the hero section.
      </p>

      {/* Search Input */}
      <div className="relative w-full max-w-md mx-auto relative z-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-3 rounded-full bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Search Icon */}
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
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
