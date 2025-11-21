"use client";

import React from "react";
import Navbar from "./Navbar"; // <-- Import your Navbar
import Footer from "./Footer"; // <-- Import your Footer

type ProductLayoutProps = {
  details: React.ReactNode;
  description: React.ReactNode;
  additionalInfo?: React.ReactNode;
  relatedProducts?: React.ReactNode;
  imageSlot?: React.ReactNode; 
};

export default function ProductLayout({
  details,
  description,
  additionalInfo,
  relatedProducts,
  imageSlot,
}: ProductLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">

      {/* ===== NAVBAR AT THE TOP ===== */}
      <Navbar />

      {/* ===== MAIN PAGE CONTENT WRAPPER ===== */}
      <div className="p-6 flex-1">
        <div className="border rounded-xl bg-white p-6 w-full mx-auto max-w-7xl text-black">

          {/* ===== TOP INFORMATION GRID ===== */}
          <div
            className="
              grid grid-cols-1 
              md:grid-cols-[1fr_1.5fr] 
              gap-6
            "
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-6">

              {/* IMAGE SLOT */}
              <div
                className="
                  border rounded-2xl p-4 bg-gray-50 
                  flex items-center justify-center 
                  aspect-square w-full
                "
              >
                {imageSlot}
              </div>

              {/* DETAILS */}
              <div
                className="
                  border rounded-2xl p-4 h-32 bg-gray-50 
                  flex items-center justify-center
                "
              >
                {details}
              </div>
            </div>

            {/* DESCRIPTION SECTION */}
            <div className="h-full flex">
              <div
                className="
                  border rounded-2xl p-6 bg-gray-50 
                  flex-1 text-black
                "
              >
                {description}
              </div>
            </div>
          </div>

          {/* ===== OPTIONAL BODY SECTION ===== */}
          {additionalInfo && (
            <div className="mt-10 border rounded-2xl p-6 bg-gray-50 text-black">
              {additionalInfo}
            </div>
          )}

          {/* ===== RELATED PRODUCTS ===== */}
          <div className="mt-10 border rounded-2xl p-4 bg-gray-50">
            {relatedProducts}
          </div>

        </div>
      </div>

      {/* ===== FOOTER AT THE BOTTOM ===== */}
      <Footer />
    </main>
  );
}
