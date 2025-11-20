// app/components/LeftSidebar.tsx
export default function LeftSideBar() {
  return (
    <aside className="w-64 bg-gray-100 p-6 border-r hidden md:flex flex-col">
      <h2 className="font-bold text-lg mb-4 text-black">Sidebar</h2>
      <ul className="space-y-3 text-gray-700">
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
        <li>Category 4</li>
      </ul>
    </aside>
  );
}
