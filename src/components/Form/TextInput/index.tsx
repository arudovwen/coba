import React, { useState } from "react";
import AppIcon from "@ui/Icon";

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
  icon?: React.ReactNode;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
};

const TextInput: React.FC<InputProps> = ({
  label,
  placeholder,
  name,
  type = "text",
  value,
  defaultValue,
  onChange,
  onKeyDown,
  onContentChange,
  register,
  required,
  error,
  hintText,
  className = "",
  containerStyle = "",
  inputWrapperStyle = "",
  leftIcon,
  rightIcon,
}) => {
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  // Merge register with onContentChange if both provided
  const registerProps =
    register && typeof register === "function"
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

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle password visibility
  };

  return (
    <div className={`w-full flex flex-col font-onest ${inputWrapperStyle}`}>
      {label && (
        <label
          htmlFor={name}
          className="mb-2 text-sm text-gray/70 font-medium leading-5"
        >
          {label}
        </label>
      )}

      <div
        className={`flex items-center h-[2.75rem] px-3 border border-[#D0D5DD] bg-[#F6F6F6] rounded  ${containerStyle}`}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          type={showPassword && type === "password" ? "text" : type} // Toggle password visibility
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={`w-full bg-transparent border-0 focus:outline-none py-[10px] text-sm text-[#101828] font-normal placeholder:text-gray/30 ${className}`}
          {...registerProps}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="ml-2 text-gray-500"
          >
            {showPassword ? (
              <span>
                <AppIcon icon="tabler:eye-off" iconClass="text-main text-lg" />
              </span> // Show icon when password is visible
            ) : (
              <span>
                <AppIcon
                  icon="fluent:eye-32-filled"
                  iconClass="text-main text-lg"
                />
              </span> // Hide icon when password is hidden
            )}
          </button>
        )}
        {<> {rightIcon && <span className="ml-2">{rightIcon}</span>}</>}
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
