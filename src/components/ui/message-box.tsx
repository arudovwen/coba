import SendSvg from "../pages/chats/builder/svgs/send";
import UploadMenu from "./upload.menu";

export default function MessageBox() {
  return (
    <div className="rounded-3xl border border-[#D5D5D5] bg-[#F5F5FA] h-full px-4 py-3
     message_shadow relative">
      <div className="flex w-full items-start gap-x-1 h-full">
        <span className="text-main font-semibold">@</span>
        <textarea
          placeholder="add context"
          className="outline-none flex-1 px-1 py-1 pr-4 rounded-lg text-sm max-w-[80%] resize-none max-h-[300px] h-full"
        ></textarea>
      </div>

      <span
        className="flex gap-x-3 items-center absolute right-2 bottom-2
      "
      >
       <UploadMenu />
        <button aria-label="attach" type="button">
          <SendSvg />
        </button>
      </span>
    </div>
  );
}
