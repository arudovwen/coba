import { ClipLoader } from "react-spinners";
import clsx from "clsx";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "outline" | "danger";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
  className,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
}) => {
  const baseClasses =
    "flex items-center justify-center text-center h-[3rem] w-full font-onest font-semibold text-base rounded-[0.5rem] px-4 transition duration-200";

  const variantClasses = {
    primary: "bg-[#3D3F94] text-white",
    outline: "bg-white text-[#3D3F94] border border-[#3D3F94]",
    danger: "bg-[#F04438] text-white",
    secondary: "bg-white border border-[#D0D5DD] text-[#475467]",
  };

  const spinnerColor =
    variant === "primary" || variant === "danger" ? "#ffffff" : "#0058E5";

  return (
    <button
      onClick={onClick}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        {
          "bg-opacity-75 cursor-not-allowed": disabled || loading,
        },
        className
      )}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <ClipLoader color={spinnerColor} size={20} />
          <span>Processing...</span>
        </span>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          <span>{text}</span>
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
