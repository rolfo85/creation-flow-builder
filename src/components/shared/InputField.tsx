import React from "react";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  id,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-indigo-950">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="p-3 h-12 rounded-md border border-gray-300 border-solid"
      />
    </div>
  );
};

export default InputField;
