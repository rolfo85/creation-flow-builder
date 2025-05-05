"use client";
import React, { useState } from "react";
import RadioButton from "./shared/RadioButton.tsx";
import Checkbox from "./shared/Checkbox.tsx";
import InputField from "./shared/InputField.tsx";

interface ItemDetailsProps {
  productName: string;
  setProductName: (name: string) => void;
  category: string;
  setCategory: (category: string) => void;
  brand: string;
  setBrand: (brand: string) => void;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ 
  productName, 
  setProductName,
  category,
  setCategory,
  brand,
  setBrand
}) => {
  const [itemType, setItemType] = useState("product" as "product" | "service");
  const [formData, setFormData] = useState({
    sku: "",
    barcode: "",
    trackInventory: false,
    taxExemption: "",
    shippingExempt: false,
  });

  const handleInputChange =
    (field: keyof typeof formData) => (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const handleCheckboxChange = (field: keyof typeof formData) => () => {
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <section className="flex flex-col flex-1 gap-10 p-10 w-auto max-w-[650px] max-sm:p-5">
      <div className="flex flex-col gap-4 h-auto grow-0">
        <h2 className="text-xl font-medium text-indigo-950">Item details</h2>
        <div className="flex gap-4">
          <RadioButton
            checked={itemType === "product"}
            onChange={() => setItemType("product")}
            label="Product"
            name="itemType"
            value="product"
          />
          <RadioButton
            checked={itemType === "service"}
            onChange={() => setItemType("service")}
            label="Service"
            name="itemType"
            value="service"
          />
        </div>

        <InputField
          label="Product name"
          value={productName}
          onChange={setProductName}
          id="productName"
        />

        <InputField
          label="Category"
          value={category}
          onChange={setCategory}
          id="category"
          placeholder="Search or add a new category"
        />

        <InputField
          label="Brand"
          value={brand}
          onChange={setBrand}
          id="brand"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-medium text-indigo-950">Inventory</h2>
        <p className="text-sm text-slate-600">
          Add SKU, stock units to track inventory.
        </p>

        <InputField
          label="SKU"
          value={formData.sku}
          onChange={handleInputChange("sku")}
          id="sku"
        />

        <InputField
          label="Barcode"
          value={formData.barcode}
          onChange={handleInputChange("barcode")}
          id="barcode"
        />

        <Checkbox
          label="Track inventory for this product."
          checked={formData.trackInventory}
          onChange={handleCheckboxChange("trackInventory")}
          id="trackInventory"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-medium text-indigo-950">More options</h2>
        <p className="text-sm text-slate-600">
          Manage taxes, fees and shipping configurations.
        </p>

        <InputField
          label="Tax exemption"
          value={formData.taxExemption}
          onChange={handleInputChange("taxExemption")}
          id="taxExemption"
        />

        <Checkbox
          label="Exempt shipping fee on this item"
          checked={formData.shippingExempt}
          onChange={handleCheckboxChange("shippingExempt")}
          id="shippingExempt"
        />
      </div>
    </section>
  );
};

export default ItemDetails;