"use client";

import ProductLayout from "@/app/components/ProductLayout";
//import LeftSidebar from "@/app/components/LeftSidebar";
import LeftSidebar from "@/app/components/LeftSideBar";

export default function Product1Page() {
  const related = [
    { id: 1, name: "Gar", image: "/products/p1.jpg" },
    { id: 2, name: "Gar", image: "/products/p1.jpg" },
    { id: 3, name: "Gar", image: "/products/p1.jpg" },
    // ...
  ];

  return (
    <div className="flex">

      {/* --- Left Sidebar (1/3 width) --- */}
      <div className="w-1/3 fixed left-0 top-[var(--nav-height)] bottom-[var(--footer-height)]">
        <LeftSidebar />
      </div>

      {/* --- Right Side: Product Layout (remaining space) --- */}
      <div className="ml-[33.333%] w-[66.666%]">
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
                (your text here)
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
      </div>

    </div>
  );
}
