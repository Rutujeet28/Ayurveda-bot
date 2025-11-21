"use client";

import { useState } from "react";
import ProductLayout from "@/app/components/ProductLayout";
import RightSidebar from "@/app/components/RightSidebar";

export default function Product1Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const related = [
    { id: 1, name: "Gar", image: "/products/p1.jpg" },
    { id: 2, name: "Gar", image: "/products/p1.jpg" },
    { id: 3, name: "Gar", image: "/products/p1.jpg" },
    { id: 4, name: "Gar", image: "/products/p1.jpg" },
    { id: 5, name: "Gar", image: "/products/p1.jpg" },
    { id: 6, name: "Gar", image: "/products/p1.jpg" },
    { id: 7, name: "Gar", image: "/products/p1.jpg" },
    { id: 8, name: "Gar", image: "/products/p1.jpg" },
    { id: 9, name: "Gar", image: "/products/p1.jpg" },
    { id: 10, name: "Gar", image: "/products/p1.jpg" },
    { id: 11, name: "Gar", image: "/products/p1.jpg" },
  ];

  return (
    <main className="relative">

      {/* 🔵 Reusable Sidebar */}
      <RightSidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* 🔵 Product Layout */}
      <ProductLayout
        imageSlot={
          <img
            src="/products/p1.jpg"
            alt="Product 1"
            className="h-full w-full object-contain"
          />
        }
        details={<p className="text-lg font-semibold">Product 1 Details</p>}
        description={
          <>
            <h2 className="text-xl font-bold mb-2">Product 1 Description</h2>
            <p className="text-gray-600">
              This product is amazing because...
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos
              reprehenderit nihil eos qui nesciunt animi, ipsum nostrum quos repudiandae aut
              accusantium, beatae tempora ex iste adipisci! Dolor, ullam! Ab!
              <br /><br />
              (more description…)
            </p>
          </>
        }
        relatedProducts={
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Similar Products
            </h3>

            <div className="flex overflow-x-auto gap-4 pb-3">
              {related.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[150px] h-40 border rounded-xl bg-white shadow-sm flex flex-col items-center p-2"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 w-full object-contain"
                  />
                  <p className="text-sm font-medium mt-2">{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </main>
  );
}
