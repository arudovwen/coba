import EmptyBox from "@components/ui/empty-box";
import MessageBox from "./message-box";
import AnalyzeSvg from "./svgs/analyze";

export default function AnalyzerIndex() {
  return (
    <div className="bg-white rounded-lg builder_shadow p-8 flex flex-col h-full">
      <div className="flex-1">
        <div className="mb-[100px] h-full flex items-center justify-center">
          <EmptyBox
            title={"What do you want to analyze today?"}
            icon={<AnalyzeSvg />}
            text={"Please type your message to start analyzing"}
          />
        </div>
      </div>

      <div className="h-[100px]">
        <MessageBox />
      </div>
    </div>
  );
}
