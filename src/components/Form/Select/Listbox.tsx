import  {
  useState,
  useEffect,
  useCallback,
  memo,
  FC,
} from "react";
import { Listbox } from "@headlessui/react";
import AppIcon from "@/components/ui/Icon";

type OptionValue = string | number  | { id: string | number };

interface Option {
  label: string;
  value: OptionValue;
}

interface ListBoxProps {
  className?: string;
  options: Option[];
  placeholder?: string;
  errors?: { message: string };
  register?: (name: string) => void;
  setValue: (name: string, value: OptionValue | OptionValue[]) => void;
  name: string;
  label?: string;
  value?: OptionValue | OptionValue[];
  trigger?: (name: string) => void;
  isMultiple?: boolean;
  isFloatingLabel?: boolean;
  subText?: string;
  labelClass?: string;
  loading?: boolean;
  skipCheck?: boolean;
  optionClass?: string;
  buttonClass?:  string;
  leftIcon?: string
}

// ✅ Label component
const SelectLabel: FC<{
  label?: string;
  isFloatingLabel?: boolean;
  labelClass?: string;
}> = memo(({ label, isFloatingLabel, labelClass }) => {
  if (!label) return null;

  return isFloatingLabel ? (
    <label
      className={`z-[40] absolute block text-[#667085] leading-[1] bg-white py-[2px] px-1 -top-2 left-3 ${labelClass}`}
    >
      {label}
    </label>
  ) : (
    <label className="block text-sm text-[#344054] leading-[1] font-medium mb-2">
      {label}
    </label>
  );
});
SelectLabel.displayName = "SelectLabel";

// ✅ Option item component
const SelectOption: FC<{
  option: Option;
  index: number;
  optionClass?: string;
}> = memo(({ option, index, optionClass }) => (
  <Listbox.Option
    key={index}
    className={({ active }) =>
      `relative cursor-pointer py-2 pl-4 pr-4 text-sm hover:bg-main/10 ${optionClass} ${
        active ? "bg-main/10" : "text-gray-900"
      }`
    }
    value={option}
  >
    {({ selected }) => (
      <div
        className={`block truncate text-sm ${optionClass} ${
          selected ? "font-medium" : "font-normal"
        }`}
      >
        {option.label}
      </div>
    )}
  </Listbox.Option>
));
SelectOption.displayName = "SelectOption";

// ✅ Main ListBox
const ListBox: FC<ListBoxProps> = ({
  className = "",
  options = [],
  placeholder = "Select",
  errors,
  register,
  setValue,
  name,
  label,
  value,
  trigger,
  isMultiple = false,
  isFloatingLabel = false,
  subText,
  labelClass = "text-[10px]",
  loading = false,
  skipCheck = false,
  optionClass,
   buttonClass,
  leftIcon=''
}) => {
  const [selected, setSelected] = useState<Option | Option[] | null>(
    isMultiple ? [] : null
  );

  // ✅ Handle selection change
  const handleChange = useCallback(
    (newSelected: Option | Option[]) => {
      setSelected(newSelected);

      const newValue = isMultiple
        ? (newSelected as Option[]).map((item) => item.value)
        : (newSelected as Option)?.value ?? null;

      setValue(name, newValue);
      trigger?.(name);
    },
    [isMultiple, name, setValue, trigger]
  );

  // ✅ Sync incoming `value` prop with selected option
  useEffect(() => {
    if (skipCheck || !options.length) return;

    const findMatchingOption = (opt: Option) => {
      if (typeof opt.value === "object" && typeof value === "object") {
        return (opt.value as { id: string | number }).id === (value as { id: string | number }).id;
      }
      return opt.value === value;
    };

    if (isMultiple && Array.isArray(value)) {
      const matched = options?.filter((opt) =>
        value.some((v) =>
          typeof v === "object" && typeof opt.value === "object"
            ? v.id === opt.value.id
            : v === opt.value
        )
      );
      setSelected(matched);
    } else if (!isMultiple && value !== undefined && value !== null) {
      const matched = options.find(findMatchingOption) || null;
      setSelected(matched);
    }
  }, [value, options, skipCheck, isMultiple]);

  // ✅ Register field on mount
  useEffect(() => {
    register?.(name);
  }, [register, name]);

  return (
    <div className={`relative ${className}`}>
      <SelectLabel
        label={label}
        isFloatingLabel={isFloatingLabel}
        labelClass={labelClass}
      />

      <Listbox
        value={selected}
        onChange={handleChange}
        multiple={isMultiple}
      >
        <div className="relative">
          <Listbox.Button
            className={`${buttonClass} border border-main rounded min-w-[120px] flex items-center px-[14px] py-[10px] gap-x-4
             text-main text-left relative`}
          >
           <div className="flex gap-x-2">
            {leftIcon && <AppIcon iconClass="text-xl" icon={leftIcon} />}
            {loading ? (
              <span className="block opacity-60 text-sm text-left">
                Fetching data...
              </span>
            ) : (
              <span
                className={`block max-w-[350px] truncate text-left ${optionClass}`}
              >
                {isMultiple
                  ? Array.isArray(selected) && selected.length > 0
                    ? (selected as Option[]).map((s) => s.label).join(", ")
                    : <span className="font-semibold">{placeholder}</span>
                  : (selected as Option)?.label ?? (
                    <span className="font-semibold">{placeholder}</span>
                  )}
              </span>
            )}
           </div>
            <span className="pointer-events-none  inset-y-0 right-0 flex items-center pr-2">
              <AppIcon icon="uiw:caret-down" />
            </span>
          </Listbox.Button>

          <Listbox.Options className="z-[77] absolute mt-1 max-h-60 min-w-[150px] w-full select_shadow overflow-auto rounded bg-white text-gray-900 py-1 text-base focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <SelectOption
                key={index}
                option={option}
                index={index}
                optionClass={optionClass}
              />
            ))}
          </Listbox.Options>
        </div>
      </Listbox>

      {!errors && subText && (
        <p className="text-[10px] text-[#98A2B3] leading-normal mt-[6px]">
          {subText}
        </p>
      )}
      {errors && <span className="text-sm text-red-500">{errors.message}</span>}
    </div>
  );
};

export default memo(ListBox);
