import { useState, useRef, useEffect } from "react";
import SendSvg from "../pages/chats/builder/svgs/send";
import UploadMenu from "./upload.menu";
import AtMenu from "./at-menu";
import FileData from "./fileData";
import { FileType } from "@/types";
import AppIcon from "./Icon";

export default function MessageBox() {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [uploadFiles, setUploadFiles] = useState<FileType[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const resizeTextArea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 200) + "px";
    }
  };

  useEffect(() => {
    resizeTextArea();
  }, [value]);

  function handleFileUpload(data: FileType) {
    setUploadFiles((prev) => [...prev, data]);
  }

  return (
    <div
      className="rounded-3xl border border-[#D5D5D5] bg-[#F5F5FA] h-full px-4 py-3
     message_shadow relative"
    >
      <div>
        {uploadFiles.length > 0 && (
          <div className="flex flex-wrap gap-x-3 items-center mb-4">
            {uploadFiles?.map((file, idx) => (
              <div
                key={idx}
                className="relative flex items-center w-full  max-w-[240px]"
              >
                <FileData
                  fileName={file.fileName}
                  extension={file.fileExtension}
                />
                <button
                  aria-label="delete"
                  type="button"
                  className="absolute right-3 cursor-pointer"
                  onClick={() => {
                    setUploadFiles((prev) => prev.filter((_, i) => i !== idx));
                  }}
                >
                  <AppIcon
                    icon="stash:times-duotone"
                    iconClass="text-lg text-[#EF5D5D]"
                  />
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex w-full items-start gap-x-1 h-full">
          <AtMenu />
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            placeholder="add context"
            className="outline-none flex-1 px-1 py-1 pr-4 rounded-lg text-sm max-w-[80%] resize-none max-h-[200px] h-full"
          ></textarea>
        </div>
      </div>

      <span
        className="flex gap-x-3 items-center absolute right-2 bottom-2
      "
      >
        <UploadMenu handleFileUpload={handleFileUpload} />
        <button aria-label="attach" type="button">
          <SendSvg />
        </button>
      </span>
    </div>
  );
}
