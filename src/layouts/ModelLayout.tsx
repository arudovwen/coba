import Sidebar from "@/components/pages/model/layout/sidebar";
import { ReactNode, FC } from "react";

// Optional: Type the return object if using a framework like Remix or RRD
export async function clientLoader() {
  return {
    title: "Model",
  };
}

const ModelLayout: FC<{ children: ReactNode }> = ({ children }) => {
 
  return (
    <div className="flex h-full">
      <aside className={`max-w-[210px] w-full transition-all duration-300`}>
        <Sidebar />
      </aside>
      <div className="w-full p-4 h-full">{children}</div>
    </div>
  );
};

export default ModelLayout;
