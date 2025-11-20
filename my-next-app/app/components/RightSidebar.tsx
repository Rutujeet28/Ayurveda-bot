type RightSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RightSidebar({ isOpen, onClose }: RightSidebarProps) {
  return (
    <aside
      className={`absolute top-0 right-0 h-full w-64 bg-gray-100 border-l shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6">
        <h2 className="font-bold text-lg text-black mb-4">Right Sidebar</h2>
        <p className="text-gray-700">Additional options or cart preview.</p>

        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </aside>
  );
}
