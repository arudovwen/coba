import { Outlet } from "react-router";
import Topbar from "@components/pages/model/layout/topbar";

export default function Model() {
  return (
    <main className="w-screen h-screen bg-[#F5F5FA] flex flex-col">
      <div>
        <Topbar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  );
}
