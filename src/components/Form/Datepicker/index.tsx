import React, { SyntheticEvent } from "react";
import { Calendar } from "primereact/calendar";
import { FormEvent, Nullable } from "primereact/ts-helpers";
import CalendarIcon from "../../assets/calender-icon.svg";

type DatePickerProp = {
  onChange:
    | ((event: FormEvent<Date, SyntheticEvent<Element, Event>>) => void)
    | undefined;
  value: Nullable<Date>;
  label: string;
  placeholder: string;
  maxDate?: Date;
  minDate?: Date;
};

const DatePicker: React.FC<DatePickerProp> = ({
  onChange,
  value,
  label,
  placeholder,
  maxDate,
  minDate
}) => {
  return (
    <div className="w-full">
      {label && (
        <span className="text-[0.875rem] text-[#344054] font-[500] leading-[1.25rem] font-onest">
          {label}
        </span>
      )}
      <Calendar
        value={value}
        onChange={onChange}
        view="date"
        className=" w-full h-[2.75rem] mt-2 mb-1 flex items-center text-[0.875rem] text-[#101828] font-[400] border border-[#D0D5DD] bg-white rounded-[0.5rem] shadow-sm shadow-[#1018280D]"
        placeholder={placeholder}
        dateFormat="dd/mm/yy"
        showIcon
        iconPos="left"
        icon={() => <img src={CalendarIcon} alt="calendar-icon" />}
        maxDate={maxDate}
        minDate={minDate}
      />
    </div>
  );
};

export default DatePicker;
