export default function Navbar() {
  return (
    <nav
      className="w-full text-gray-900 px-12 py-3 flex items-center justify-between shadow-md h-18"
      style={{ backgroundColor: "#ccffff" }}
    >
      {/* Logo */}
      <h1 className="text-xl font-bold">Ayurveda</h1>

      {/* Links */}
      <div className="flex gap-4 text-lg">

        {/* Reusable gradient button classes */}
        <a
          href="/"
          className="px-4 py-2 rounded-md text-white 
          bg-gradient-to-br from-blue-400 to-teal-400
          hover:from-blue-500 hover:to-teal-500
          transition-all shadow-md"
        >
          Home
        </a>

        <a
          href="/products"
          className="px-4 py-2 rounded-md text-white 
          bg-gradient-to-br from-blue-400 to-teal-400
          hover:from-blue-500 hover:to-teal-500
          transition-all shadow-md"
        >
          Products
        </a>

        <a
          href="/ingredients"
          className="px-4 py-2 rounded-md text-white 
          bg-gradient-to-br from-blue-400 to-teal-400
          hover:from-blue-500 hover:to-teal-500
          transition-all shadow-md"
        >
          Ingredients
        </a>

        <a
          href="/login/signup"
          className="px-4 py-2 rounded-md text-white 
          bg-gradient-to-br from-blue-400 to-teal-400
          hover:from-blue-500 hover:to-teal-500
          transition-all shadow-md"
        >
          Login / Sign Up
        </a>

      </div>
    </nav>
  );
}
