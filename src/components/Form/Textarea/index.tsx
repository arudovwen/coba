type TextAreaProp = {
  placeholder: string;
  label?: string;
  value?: string;
  className?: string;
  hasIcon?: boolean;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  hintText?: string;
  containerStyle?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  name: string;
  register?: (
    name: string,
    options?: { required?: boolean }
  ) => Record<string, unknown>;
  required?: boolean;
  error?: string | null;
  inputWrapperStyle?: string;
  rows: number;
};
const TextArea: React.FC<TextAreaProp> = ({
  label,
  className,
  placeholder,
  value,
  onChange,
  containerStyle,
  onKeyDown,
  register,
  required,
  name,
  error,
  inputWrapperStyle,
  rows = 8,
}) => {
  return (
    <div className={`${inputWrapperStyle} w-full flex flex-col font-onest`}>
      {label && (
        <span className="mb-2 text-[0.875rem] text-[#344054] font-[500] leading-[1.25rem]">
          {label}
        </span>
      )}
      <div
        className={`${containerStyle} flex items-center px-2 border border-[#D0D5DD] bg-[#F6F6F6] rounded-[0.5rem] shadow-sm shadow-[#1018280D]`}
      >
        <textarea
          rows={rows}
          name={name}
          placeholder={placeholder}
          className={`${className} w-full bg-transparent p-2 placeholder:text-gray/30   border-0 focus:outline-none py-2 text-[0.875rem]`}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          {...(register && { ...register(`${name}`, { required }) })}
        />
      </div>
      {error && (
        <span className="mt-2 text-[0.75rem] text-red-500">{error}</span>
      )}
    </div>
  );
};

export default TextArea;
