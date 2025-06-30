import ChatLayout from "@/layouts/ChatLayout";
import { Outlet } from "react-router";

export async function clientLoader() {
  return {
    title: "Chat",
  };
}

export default function Chats() {
  return (
    <ChatLayout>
     
        <Outlet />
     
    </ChatLayout>
  );
}
