import ChatSvg from "../svgs/chat";
import TogglerSvg from "../svgs/toggler";
import SearchSvg from "../svgs/search";
import { SideBarList } from "@/data";
import { NavLink } from "react-router";
import ChatHistory from "./chat-history";
import AppIcon from "@/components/ui/Icon";

export default function Sidebar() {
  return (
    <div className="bg-white p-4 h-full w-full">
      <div className="flex justify-between mb-8">
        <button aria-label="search" type="button">
          <TogglerSvg />{" "}
        </button>{" "}
        <span className="flex gap-x-3">
          {" "}
          <button aria-label="search" type="button">
            <SearchSvg />
          </button>{" "}
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
                  } py-[10px] px-2  font-semibold text-main rounded  flex justify-between items-center`
                }
                to={item.link}
              >
                <span className="flex gap-x-2 items-center">
                  {" "}
                  <item.icon /> {item.title}
                </span>{" "}
                {item.hasOption && (
                  <button onClick={()=> alert('hello')} type="button" aria-label="add">
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

        <ChatHistory />
      </div>
    </div>
  );
}
