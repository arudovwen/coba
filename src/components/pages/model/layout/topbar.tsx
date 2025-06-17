import { ModelNavList } from "@/data";
import { NavLink } from "react-router";
import SettingSvg from "../svgs/settings";
import UserSvg from "../svgs/user";

export default function Topbar() {
  return (
    <nav className="px-4 py-4 bg-white w-full border-b border-[#ECECF5] flex items-center justify-between">
      <ul className="flex gap-x-1 items-center">
        {ModelNavList?.map((item) => (
          <li key={item.title}>
            <NavLink
              className={({ isActive, isPending }) =>
                `${isActive ? "text-main bg-main/15" : ""} ${
                  isPending ? "text-main" : ""
                } px-[10px] py-[6px] text-sm font-semibold text-gray/70 rounded`
              }
              to={item.link}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <span  className="flex gap-x-4 items-center text-gray/70">
        <button aria-label="settings" type="button">
          <SettingSvg />
        </button>
        <button
          aria-label="user"
          className="flex gap-x-2 items-center text-gray/70"
          type="button"
        >
          <UserSvg /> <span className="text-sm font-semibold">John Snow</span>
        </button>
      </span>
    </nav>
  );
}
