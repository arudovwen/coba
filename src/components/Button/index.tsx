import React from 'react';
import { ClipLoader } from 'react-spinners';

type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  hasRightIcon?: boolean;
  hasLeftIcon?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
  loading = false,
  hasLeftIcon = false,
  hasRightIcon = false,
  children,
}) => {
  const baseClasses =
    'flex items-center justify-center text-center h-[3rem] w-full font-onest font-semibold text-base rounded-[0.5rem] px-4 transition duration-200';

  const variantClasses = {
    primary: 'bg-[#0058E5] text-white',
    outline: 'bg-white text-[#344054] border border-[#D0D5DD]',
    danger: 'bg-[#F04438] text-white',
    secondary: 'bg-white border border-[#D0D5DD] text-[#475467]',
  }[variant];

  const spinnerColor = variant === 'primary' || variant === 'danger' ? '#ffffff' : '#0058E5';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className} ${
        disabled ? 'bg-opacity-75 cursor-not-allowed' : ''
      }`}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <ClipLoader color={spinnerColor} size={20} />
          <span>Processing...</span>
        </span>
      ) : (
        <>
          {hasLeftIcon && <span className="mr-2">{children}</span>}
          <span>{text}</span>
          {hasRightIcon && <span className="ml-2">{children}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
