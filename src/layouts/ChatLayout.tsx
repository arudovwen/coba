import Sidebar from "@/components/pages/chats/layout/sidebar";
import { ReactNode, FC, useState } from "react";

// Optional: Type the return object if using a framework like Remix or RRD
export async function clientLoader() {
  return {
    title: "Model",
  };
}

const ChatLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [miniBar, setMiniBar] = useState(false);
  return (
    <div className="flex h-full">
      <aside className={`${miniBar ? "max-w-[80px]" : "max-w-[210px]"} w-full transition-all duration-300`}>
        <Sidebar miniBar={miniBar} setMiniBar={setMiniBar} />
      </aside>
      <div className="w-full p-4 h-full">{children}</div>
    </div>
  );
};

export default ChatLayout;
