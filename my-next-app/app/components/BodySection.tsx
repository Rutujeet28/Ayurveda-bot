export default function BodySection() {
  return (
    <section
      className="relative w-full h-[60vh] overflow-hidden"
      style={{
        backgroundImage: "url('/bg-1.jpg'), url('/bg-2.jpg')",
        backgroundSize: "50% 100%, 50% 100%",
        backgroundPosition: "left center, right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center p-6 md:p-12">
        <div
          className="bg-white/80 rounded-lg p-8 shadow-lg border-4 border-black"
          style={{ color: "#000006" }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Healing made Easy through Medicinal Research and AI
          </h2>
          <h2 className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel exercitationem voluptas voluptate sunt similique tempore repudiandae modi obcaecati? Atque autem, aut quod quaerat ea nam facere voluptatum id iure!
          </h2>
        </div>
      </div>
    </section>
  );
}
