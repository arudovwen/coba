import AppIcon from "@/components/ui/Icon";
import Button from "@/components/Button";
import Search from "../svgs/search";
import { useMemo, useState } from "react";
import Modal from "@/components/Modal";

import NewModel from "../create/new-model";
// import ModelTrigger from "../create/model-trigger";
// import ModelDetail from "../create/mode-detail";

const menuOptions = [
  { text: "@model 1" },
  { text: "@model 2" },
  { text: "@model 3" },
];

export default function Sidebar() {
  const [query, setQuery] = useState<string>("");
  const [open, setOpen] = useState(false);
  const filteredOptions = useMemo(
    () =>
      query
        ? menuOptions?.filter((i) =>
            i.text.toLowerCase().includes(query.toLowerCase())
          )
        : menuOptions,
    [query]
  );
  return (
    <div className="bg-white py-4 h-full w-full">
      <div className="flex justify-between mb-4  border-b border-[#F1F2F8] pb-3 px-2">
        <h2 className="font-semibold text-sm">Model List</h2>{" "}
        <button
       
          type="button"
          aria-label="do"
          className="text-main"
        >
          <AppIcon icon="heroicons-outline:chevron-double-left" />
        </button>
      </div>
      <div className="px-2">
        <Button    onClick={() => setOpen(true)}  text={"New model"} />
      </div>

      <hr className="my-4 border-[#3D3F944D]" />
      <div className="px-2">
        <div className="bg-[#F6F6F6] border border-[#D5D5D5] rounded mb-1 flex items-center px-4 relative">
          <input
            placeholder="Search model"
            className="text-sm py-[11px]   flex-1 outline-none"
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="absolute right-2">
            {" "}
            <Search />
          </span>
        </div>
        <div className=" mt-2 text-xs text-gray/70 font-semibold bg-[#F1F2F8] border border-[#F1F2F8] px-2 py-[6px]">
          List
        </div>
        <ul className=" p-1 min-w-[200px] origin-bottom-right rounded-md bg-white  focus:outline-none">
          {filteredOptions.map((option) => (
            <li
              key={option.text}
              className="border-b border-gray/20 flex justify-between items-center"
            >
              <button
                type="button"
                className={` group flex cursor-pointer items-center gap-x-2 w-full whitespace-nowrap px-2 py-2 text-xs text-gray/70 font-semibold`}
              >
                {option.text}
              </button>
              <button
                aria-label="delete"
                type="button"
                className=" cursor-pointer"
              >
                <AppIcon
                  icon="stash:times-duotone"
                  iconClass="text-[#EF5D5D]"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Modal visible={open} closeModal={() => setOpen(false)} size="small">
       <>
       <NewModel />
       {/* <ModelTrigger /> */}
       {/* <ModelDetail /> */}
       </>
      </Modal>
    </div>
  );
}
