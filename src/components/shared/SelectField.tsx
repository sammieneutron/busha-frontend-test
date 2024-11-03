import * as React from 'react';
import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from './FieldWrapper';

type Option = {
  label: React.ReactNode;
  value: string | number;
};

export type SelectFieldProps =
  FieldWrapperPassThroughProps & {
    defaultOption?: Option;
    options: Option[];
    className?: string;
    defaultValue?: any;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Add onChange prop here
  };

export function SelectField({
  label,
  options,
  error,
  className,
  defaultValue,
  placeholder,
  defaultOption,
  disabled = false,
  required = true,
  onChange, // Destructure onChange here
}: SelectFieldProps) {
  if (!options) return null;

  return (
    <FieldWrapper
      label={label}
      error={error}
      required={required}
    >
      <select
        title={placeholder}
        name="location"
        className={`
          bg-white border border-gray-400 mt-1 block w-full pl-3 pr-10 py-4 text-base
          focus:outline-none focus:ring-gray-200 focus:border-gray-500 sm:text-sm
          custom-scrollbar rounded-md ${disabled ? 'opacity-60' : ''} ${className}
        `}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange} // Add onChange handler to select element
      >
        {defaultOption && (
          <option value={defaultOption.value}>
            {defaultOption.label}
          </option>
        )}
        {options.map(({ label, value }: Option) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}
