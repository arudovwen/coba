import { useMemo, useState } from "react";
import {
  Menu,
  MenuButton,
  Transition,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import Search from "../pages/model/svgs/search";

const menuOptions = [
  { text: "@model 1" },
  { text: "@model 2" },
  { text: "@model 3" },
];

export default function UploadMenu() {
  const [query, setQuery] = useState<string>("");
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
    <Menu as="div" className="relative flex">
      <MenuButton
        aria-label="attach"
        type="button"
        className="cursor-pointer outline-none"
      >
        <span className="text-main font-semibold">@</span>
      </MenuButton>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div>
          <MenuItems className="absolute bottom-10 left-0 mt-2 p-1 min-w-[200px] origin-bottom-right rounded-md bg-white menu_shadow focus:outline-none">
           <div className="bg-[#F6F6F6] border border-[#D5D5D5] rounded mb-1 flex items-center px-4">
             <input
              placeholder="Search model"
              className="text-sm py-[11px]   flex-1 outline-none"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Search />
           </div>
            {filteredOptions.map((option) => (
              <MenuItem key={option.text}>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? "bg-gray-100" : ""
                    } group flex cursor-pointer items-center gap-x-2 w-full whitespace-nowrap px-3 py-2 text-sm text-gray/70 font-semibold`}
                  >
                    {option.text}
                  </button>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </div>
      </Transition>
    </Menu>
  );
}
