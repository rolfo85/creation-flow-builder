import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  id,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded-md border-2 border-gray-400 border-solid"
      />
      <label htmlFor={id} className="text-sm text-indigo-950">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
