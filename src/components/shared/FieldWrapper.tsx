
import * as React from 'react';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: undefined | any;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  showPasswordStrength?: boolean;
  passwordStrength?: string;
  passwordStrengthError?: any[];
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;

export const FieldWrapper = ({
  label,
  className,
  error,
  children,
  required = true,
  description,
}: FieldWrapperProps) => {
  return (
    <div>
      <div
        className={
          'block text-sm font-medium text-gray-700'}
      >
        {label}{' '}
        {required && (
          <span className="text-red-500">*</span>
        )}
        <div className="mt-1">{children}</div>
      </div>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="text-sm text-red-500 pt-2"
        >
          {error.message}
        </div>
      )}
      {description && (
        <p
          id="helper-text-explanation"
          className="mt-1 text-sm text-gray-500 dark:text-gray-400"
        >
          {description}
        </p>
      )}
    </div>
  );
};
