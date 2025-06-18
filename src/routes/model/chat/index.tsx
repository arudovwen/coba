import ModelLayout from "@layouts/ModelLayout";
import { Outlet } from "react-router";

export async function clientLoader() {
  return {
    title: "Chat",
  };
}

export default function Chats() {
  return (
    <ModelLayout>
     
        <Outlet />
     
    </ModelLayout>
  );
}
