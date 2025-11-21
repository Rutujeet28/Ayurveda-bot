"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSideBar";
import ProdCard from "../components/ProdCard";

export default function ProductsPage() {
  const [isRightOpen, setIsRightOpen] = useState(false);

  const products = [
    {
      name: "Aloe Face Gel",
      image: "/products/p1.jpg",
      category: "Skincare",
      use: "Hydration",
      feature: "100% Pure Aloe Extract",
      description: "Soothes skin and reduces redness.",
    },
    {
      name: "Vitamin C Serum",
      image: "/products/p2.png",
      category: "Serum",
      use: "Brightening",
      feature: "20% Vitamin C",
      description: "Improves glow and skin texture.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex flex-1 relative">
        <LeftSidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold text-black mb-6">Products</h1>

          <p className="mb-8 text-gray-700">
            Browse our collection of amazing items!
          </p>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <ProdCard key={i} {...p} href={`/products/${p.name}`} />
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <RightSidebar
          isOpen={isRightOpen}
          onToggle={() => setIsRightOpen(!isRightOpen)}
        />
      </div>

      <footer className="p-6 bg-gray-200 text-center text-black">
        Footer content here
      </footer>
    </main>
  );
}
