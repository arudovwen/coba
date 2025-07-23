import Button from "@/components/Button";
import AppIcon from "@/components/ui/Icon";
import Search from "../model/svgs/search";
import { useState } from "react";
import Listbox from "@/components/Form/Select/Listbox";
import { DocSortOptions } from "@/data";

export default function DocBar() {
  const [query, setQuery] = useState<string>("");
  const [listType, setListType] = useState<string>("grid");
  const listTypeOptions = [
    {
      icon: "mingcute:grid-line",
      key: "grid",
    },
    {
      icon: "flowbite:list-outline",
      key: "list",
    },
  ];
  return (
    <div className="flex justify-between items-center">
      <div>
        <Button
          text="Upload New Document"
          leftIcon={<AppIcon iconClass="text-xl" icon="tabler:upload" />}
        />
      </div>
      <div className="flex gap-x-5 items-center">
        <div className="flex gap-x-3">
          {listTypeOptions.map((item) => (
            <button
              onClick={() => setListType(item.key)}
              className={`cursor-pointer text-main text-lg p-1 rounded hover:bg-main/90 hover:text-white h-6 w-6 flex items-center justify-center ${
                item.key === listType ? "bg-main text-white " : "text-main "
              }`}
              type="button"
              aria-label="delete"
            >
              <AppIcon icon={item.icon} />
            </button>
          ))}
        </div>
        <div>
          <Listbox
            name="sort"
            placeholder="Sort"
            options={DocSortOptions}
            setValue={() => {}}
            leftIcon="flowbite:sort-outline"
          />
        </div>
        <div>
          <div className="bg-[#F6F6F6] border border-[#D5D5D5] rounded mb-1 flex items-center px-4 relative w-[400px]">
            <input
              placeholder="Search"
              className="py-[11px]   flex-1 outline-none"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <span className="absolute right-2">
              {" "}
              <Search />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
