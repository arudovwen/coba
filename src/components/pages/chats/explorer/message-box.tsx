import React from "react";
import SendSvg from "./svgs/send";
import AttachmentSvg from "./svgs/attachment";

export default function MessageBox() {
  return (
    <div className="rounded-3xl border border-[#D5D5D5] bg-[#F5F5FA] h-full p-4 message_shadow relative">
      <span>
        {" "}
        <span className="text-main font-semibold">@</span>{" "}
        <span className="text-sm text-gray/50"> add context</span>
      </span>

      <span
        className="flex gap-x-3 items-center absolute right-2 bottom-2
      "
      >
        <button aria-label="attach" type="button">
          <AttachmentSvg />
        </button>
        <button aria-label="attach" type="button">
          <SendSvg />
        </button>
      </span>
    </div>
  );
}
