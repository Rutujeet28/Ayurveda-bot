export default function Navbar() {
  return (
    <nav
      className="w-full text-gray-900 px-12 py-3 flex items-center justify-between shadow-md"
      style={{ backgroundColor: "#ccffff" }}
    >
      {/* Logo on the left */}
      <h1 className="text-xl font-bold">MyNextApp</h1>

      {/* Links on the right */}
      <div className="flex gap-4 text-lg">
        <a
          href="/"
          className="px-4 py-2 bg-gray-100 text-gray-900 rounded-md border border-gray-400 hover:bg-gray-200 transition"
        >
          Home
        </a>
        <a
          href="/products"
          className="px-4 py-2 bg-gray-100 text-gray-900 rounded-md border border-gray-400 hover:bg-gray-200 transition"
        >
          Products
        </a>
        <a
          href="/ingredients"
          className="px-4 py-2 bg-gray-100 text-gray-900 rounded-md border border-gray-400 hover:bg-gray-200 transition"
        >
          Ingredients
        </a>
        <a
          href="/login/signup"
          className="px-4 py-2 bg-gray-100 text-gray-900 rounded-md border border-gray-400 hover:bg-gray-200 transition"
        >
          Login / Sign Up
        </a>
      </div>
    </nav>
  );
}
