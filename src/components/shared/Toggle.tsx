import React from "react";

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  description?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col p-4 rounded-md border border-gray-300 border-solid">
      <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-2 max-sm:items-start">
        <h3 className="text-lg font-medium text-indigo-950">{label}</h3>
        <button
          role="switch"
          aria-checked={checked}
          onClick={onChange}
          className={`relative w-[32px] h-[20px] rounded-full transition-colors ${
            checked ? "bg-violet-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-[2px] ${
              checked ? "right-[2px]" : "left-[2px]"
            } w-4 h-4 bg-white rounded-full transition-all shadow-md`}
          />
        </button>
      </div>
      {description && <p className="text-sm text-slate-600">{description}</p>}
    </div>
  );
};

export default Toggle;
