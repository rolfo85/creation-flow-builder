"use client";
import React, { useState } from "react";
import TopBar from "./TopBar.tsx";
import ItemDetails from "./ItemDetails.tsx";
import ItemSummary from "./ItemSummary.tsx";

const ProductManagement = () => {
  const [productName, setProductName] = useState("Premium paw dog food");
  const [category, setCategory] = useState("Dog food");
  const [brand, setBrand] = useState("Premium paws");

  return (
    <main className="flex flex-col mx-auto w-full max-w-none h-screen bg-white max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <TopBar />
      <div className="flex flex-1 max-w-[1200px] w-full justify-center items-start mx-auto max-md:flex-col max-sm:flex-col">
        <ItemDetails 
          productName={productName} 
          setProductName={setProductName}
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
        />
        <ItemSummary 
          productName={productName}
          category={category}
          brand={brand}
        />
      </div>
    </main>
  );
};

export default ProductManagement;