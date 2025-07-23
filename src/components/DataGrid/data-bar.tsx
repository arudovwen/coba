import { GridSortOptions } from "@/data";
import Listbox from "../Form/Select/Listbox";
import AppIcon from "../ui/Icon";

export default function DataBar() {
  return (
    <div className="flex justify-between items-center bg-[#F5F5FA] px-4 py-2">
      <Listbox
        placeholder="New Data"
        options={GridSortOptions}
        setValue={() => {}}
        name={""}
        buttonClass="!border-none text-sm !px-0"
      />

      <div className="bg-white py-[5px]  px-[10px] font-semibold text-gray flex items-center gap-x-2 w-max"><span>Table 1</span> <AppIcon iconClass="text-main" icon="jam:info" />
      </div>

      <div>
        <Listbox
          placeholder="Export"
          options={GridSortOptions}
          setValue={() => {}}
          name={""}
          buttonClass="!py-[6px] tetx-sm"
          leftIcon="typcn:export-outline"
        />
      </div>
    </div>
  );
}
