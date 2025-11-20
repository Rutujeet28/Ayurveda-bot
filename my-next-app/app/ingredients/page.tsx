"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSideBar";

export default function ProductsPage() {
  const [isRightOpen, setIsRightOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* NAVBAR */}
      <Navbar />

      {/* FULL PAGE BODY (sidebars + content) */}
      <div className="flex relative min-h-screen">
        {/* LEFT SIDEBAR */}
        <LeftSidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1">
          <section className="p-10">
            <h1 className="text-3xl font-bold text-black mb-6">Products</h1>
            <p className="mb-8 text-gray-700">
              Browse our collection of amazing items!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Product cards here */}
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <RightSidebar
          isOpen={isRightOpen}
          onClose={() => setIsRightOpen(false)}
        />

        {/* RIGHT SLIDE TAB */}
        {!isRightOpen && (
          <button
            onClick={() => setIsRightOpen(true)}
            className="absolute top-1/2 right-0 bg-blue-600 text-white px-3 py-2 rounded-l shadow hover:bg-blue-700"
          >
            Open
          </button>
        )}
      </div>

      {/* FOOTER — outside the flex, so sidebars reach it */}
      <footer className="p-6 bg-gray-200 text-center text-black mt-10">
        Footer content here
      </footer>
    </main>
  );
}
