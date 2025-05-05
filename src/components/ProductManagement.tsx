"use client";
import React from "react";
import TopBar from "./TopBar.tsx";
import ItemDetails from "./ItemDetails.tsx";
import ItemSummary from "./ItemSummary.tsx";

const ProductManagement = () => {
  return (
    <main className="flex flex-col mx-auto w-full max-w-none h-screen bg-white max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <TopBar />
      <div className="flex flex-1 max-md:flex-col max-sm:flex-col">
        <ItemDetails />
        <ItemSummary />
      </div>
    </main>
  );
};

export default ProductManagement;
