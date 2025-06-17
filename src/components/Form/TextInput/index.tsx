import React from 'react';

type InputProps = {
  label?: string;
  placeholder: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onContentChange?: () => void;
  register?: (
    name: string,
    options?: { required?: boolean }
  ) => {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    [key: string]: unknown;
  };
  required?: boolean;
  error?: string | null;
  hintText?: string;
  className?: string;
  containerStyle?: string;
  inputWrapperStyle?: string;
  hasIcon?: boolean;
  children?: React.ReactNode;
};

const TextInput: React.FC<InputProps> = ({
  label,
  placeholder,
  name,
  type = 'text',
  value,
  defaultValue,
  onChange,
  onKeyDown,
  onContentChange,
  register,
  required,
  error,
  hintText,
  className = '',
  containerStyle = '',
  inputWrapperStyle = '',
  hasIcon = false,
  children,
}) => {
  // Merge register with onContentChange if both provided
  const registerProps =
    register && typeof register === 'function'
      ? onContentChange
        ? {
            ...register(name, { required }),
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              register(name, { required }).onChange?.(e);
              onContentChange();
              onChange?.(e);
            },
          }
        : { ...register(name, { required }) }
      : {};

  return (
    <div className={`w-full flex flex-col font-onest ${inputWrapperStyle}`}>
      {label && (
        <label
          htmlFor={name}
          className="mb-2 text-sm text-[#344054] font-medium leading-5"
        >
          {label}
        </label>
      )}

      <div
        className={`flex items-center h-[2.75rem] px-2 border border-[#D0D5DD] bg-white rounded-lg shadow-sm shadow-[#1018280D] ${containerStyle}`}
      >
        {hasIcon && <div className="mr-2">{children}</div>}

        <input
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={`w-full bg-transparent border-0 focus:outline-none py-2 text-sm text-[#101828] font-normal placeholder:text-[#667085] ${className}`}
          {...registerProps}
        />
      </div>

      {hintText && (
        <span className="mt-2 text-sm text-[#475467] font-normal leading-5">
          {hintText}
        </span>
      )}

      {error && (
        <span className="mt-2 text-xs text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
};

export default TextInput;
