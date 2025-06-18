import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

type SelectProp = {
  value: {
    name: string;
    code: string;
  };
  options: Array<{
    name: string;
    code: string;
  }>;
  placeholder?: string;
  onChange: (e: DropdownChangeEvent) => void;
  disabled?: boolean;
  label?: string;
  filter?: boolean;
  dropdownStyles?: string;
  containerStyles?: string;
  error?: string;
  name?: string;
};
const SelectDropdown: React.FC<SelectProp> = ({
  value,
  options,
  placeholder,
  onChange,
  disabled = false,
  label,
  containerStyles,
  dropdownStyles,
  filter = true,
  error,
  name,
}) => {
  return (
    <div className={`${containerStyles} w-full`}>
      {label && (
        <span className="mb-2 text-[0.875rem] text-[#344054] font-onest font-[500] leading-[1.25rem]">
          {label}
        </span>
      )}
      <Dropdown
        name={name}
        value={value}
        onChange={onChange}
        options={options}
        optionLabel="name"
        placeholder={placeholder}
        filter={filter}
        className={`${dropdownStyles} custom-dropdown w-full h-[2.75rem] flex items-center my-2 text-[0.75rem] text-[#101828] font-[400] pl-4 border border-[#D0D5DD] bg-white rounded-[0.5rem] shadow-sm shadow-[#1018280D] mb-2`}
        disabled={disabled}
        showClear
      />

      {error && (
        <span className="text-[0.75rem] font-onest text-red-500">{error}</span>
      )}
    </div>
  );
};

export default SelectDropdown;
