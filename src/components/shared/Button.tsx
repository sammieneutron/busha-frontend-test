import * as React from 'react';

import { Spinner } from './Spinner';

export const variants = {
  primary: 'bg-[#000] text-white',
  inverse: 'bg-white',
  secondary: 'bg-[#71ED45] text-[#12342A] border-[#12342A]',
  danger: 'bg-red-600 text-white',
  info: 'bg-[#EDE82A] text-black',
  warning:
    'border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all',
};

export const sizes = {
  xs: 'py-1 px-2 text-sm',
  sm: 'py-3 px-6 text-sm',
  md: 'py-3 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    isLoading?: boolean;
  } & IconProps;

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={
          `flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-full shadow-sm font-medium focus:outline-none hover:opacity-80 py-3 px-8 bg-[#000] text-white text-md ${className}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading && (
          <Spinner size="sm" className="text-current" />
        )}
        {!isLoading && startIcon}
        <span className="mx-2">
          {props.children}
        </span>{' '}
        {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
