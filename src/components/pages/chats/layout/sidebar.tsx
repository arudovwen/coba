import ChatSvg from "../svgs/chat";
import TogglerSvg from "../svgs/toggler";
import SearchSvg from "../svgs/search";
import { SideBarList } from "@/data";
import { NavLink } from "react-router";
import ChatHistory from "./chat-history";
import AppIcon from "@/components/ui/Icon";

export default function Sidebar({
  setMiniBar,
  miniBar,
}: {
  setMiniBar: (e: boolean) => void;
  miniBar: boolean;
}) {
  return (
    <div className="bg-white p-4 h-full w-full">
      <div className="flex justify-between mb-8">
        <button
          onClick={() => setMiniBar(!miniBar)}
          aria-label="search"
          type="button"
          className="cursor-pointer"
        >
          <TogglerSvg />{" "}
        </button>{" "}
        <span className="flex gap-x-3">
          {" "}
          {!miniBar && (
            <button aria-label="search" type="button">
              <SearchSvg />
            </button>
          )}
          <button aria-label="chat" type="button">
            <ChatSvg />
          </button>
        </span>
      </div>
      <div>
        <ul className="grid  gap-y-2">
          {SideBarList?.map((item) => (
            <li key={item.title}>
              <NavLink
                className={({ isActive, isPending }) =>
                  `${isActive ? "text-main bg-main/15" : ""} ${
                    isPending ? "text-main" : ""
                  } ${
                    miniBar ? "justify-center" : "justify-between"
                  } py-[10px] px-2  font-semibold text-main rounded  flex  items-center`
                }
                to={item.link}
              >
                <span className={`flex  items-center  ${miniBar ? "justify-center" : "justify-between gap-x-2"}`}>
                  {" "}
                  <item.icon />
                  <span
                    className={`transition-all duration-300 ${
                      miniBar
                        ? "opacity-0 w-0 overflow-hidden"
                        : "opacity-100 w-auto"
                    }`}
                  >
                    {item.title}
                  </span>
                </span>{" "}
                {!miniBar && item.hasOption && (
                  <button
                    onClick={() => alert("hello")}
                    type="button"
                    aria-label="add"
                  >
                    <AppIcon
                      icon="rivet-icons:plus"
                      iconClass="text-main text-sm"
                    />
                  </button>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <hr className="border-gray/20 mt-[50px] mb-6" />

        {!miniBar && <ChatHistory />}
      </div>
    </div>
  );
}
