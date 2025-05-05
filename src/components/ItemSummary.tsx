"use client";
import React, { useState } from "react";
import Toggle from "./shared/Toggle.tsx";

const ItemSummary = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <aside className="flex flex-col self-center px-16 py-10 mb-auto h-auto bg-white border-l border-solid border-l-gray-300 w-[566px] max-md:w-full max-sm:p-5 max-sm:w-full">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium text-indigo-950">Item summary</h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center p-6 bg-amber-100 rounded-xl">
            <div className="flex flex-col gap-2 items-center">
              <div className="px-4 py-1 text-xs font-medium text-violet-600 bg-violet-100 rounded-[45px]">
                Selling price
              </div>
              <div className="text-3xl font-medium text-indigo-950">$0.00</div>
            </div>

            <div className="flex gap-4 items-center p-4 w-full bg-white rounded-md border border-solid border-slate-50">
              <div className="flex items-center justify-center w-10 h-10 bg-violet-500 rounded">
                <span className="text-white font-bold">PP</span>
              </div>
              <div className="text-sm font-medium text-indigo-950">
                Premium paw dog food
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-sm font-medium text-gray-700 w-[150px]">
              Description
            </div>
            <p className="text-sm text-indigo-950">
              Premium Paws Gourmet Blend is made with only the finest,
              all-natural ingredie
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <div className="text-sm font-medium text-gray-700 w-[150px]">
                Category
              </div>
              <div className="text-sm text-indigo-950">Dog food</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700 w-[150px]">
                Brand name
              </div>
              <div className="text-sm text-indigo-950">Premium paws</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-sm font-medium text-gray-700 w-[150px]">
              Taxes
            </div>
            <div className="text-sm text-indigo-950">Fully taxable</div>
          </div>
        </div>

        <Toggle
          checked={isAvailable}
          onChange={() => setIsAvailable(!isAvailable)}
          label="Availability"
          description="Item available. Disable the toggle when the item is unavailable or out of stock."
        />
      </div>
    </aside>
  );
};

export default ItemSummary;