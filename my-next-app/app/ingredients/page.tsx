"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSideBar";
import IngredCard from "../components/IngredCard"; // Import IngredCard
import Footer from "../components/Footer";

export default function ProductsPage() {
  const [isRightOpen, setIsRightOpen] = useState(false);

  const ingredients = [
    {
      name: "Citric Acid",
      image: "/ingredients/i1.png",
      category: "Skincare",
      use: "Hydration",
      feature: "100% Pure Extract",
      description: "Soothes skin and reduces redness.",
      iupacName: "2-Hydroxypropane-1,2,3-tricarboxylic acid",
      commonName: "Citric Acid",
    },
    {
      name: "Neem",
      image: "/ingredients/i2.png",
      category: "Serum",
      use: "Brightening",
      feature: "20% Vitamin C",
      description: "Improves glow and skin texture.",
      iupacName: "Azadirachta indica",
      commonName: "Vitamin C",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex flex-1 relative">
        <LeftSidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold text-black mb-6">Ingredients</h1>

          <p className="mb-8 text-gray-700">
            Browse our collection of cosmetic ingredients!
          </p>

          {/* INGREDIENT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {ingredients.map((item, i) => (
              <IngredCard
                key={i}
                {...item}
                href={`/ingredients/${item.name}`} // Optional dynamic route
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <RightSidebar
          isOpen={isRightOpen}
          onToggle={() => setIsRightOpen(!isRightOpen)}
        />
      </div>

        <Footer />
    </main>
  );
}
