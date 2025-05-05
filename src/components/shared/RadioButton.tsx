import React from "react";

interface RadioButtonProps {
  checked: boolean;
  label: string;
  onChange: () => void;
  name: string;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  label,
  onChange,
  name,
  value,
}) => {
  return (
    <div
      className={`flex flex-1 gap-4 items-center p-4 bg-white rounded-md border border-gray-300 border-solid ${checked ? "border-violet-500" : ""}`}
      onClick={onChange}
      role="presentation"
    >
      <div className="relative">
        <input
          type="radio"
          className="sr-only"
          checked={checked}
          onChange={onChange}
          name={name}
          value={value}
          id={`radio-${value}`}
        />
        <div
          className={`w-4 h-4 rounded-full border-2 ${checked ? "border-violet-500 bg-violet-500" : "border-gray-400"}`}
        >
          {checked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
        </div>
      </div>
      <label
        htmlFor={`radio-${value}`}
        className={`text-sm font-medium ${checked ? "text-violet-600" : "text-indigo-950"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;