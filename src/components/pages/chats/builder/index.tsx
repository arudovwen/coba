import EmptyBox from "@components/ui/empty-box";
import MessageBox from "./message-box";
import BuildSvg from "./svgs/build";

export default function BuilderIndex() {
  return (
    <div className="bg-white rounded-lg builder_shadow p-8 flex flex-col h-full">
      <div className="flex-1">
       <div className="mb-[100px] h-full flex items-center justify-center">
         <EmptyBox
          title={"What do you want to build today?"}
          icon={<BuildSvg />}
          text={"Please type your message to start building"}
        />
       </div>
      </div>

      <div className="h-[100px]">
        <MessageBox />
      </div>
    </div>
  );
}
