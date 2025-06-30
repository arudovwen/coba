import { useRef } from "react";
import {
  Menu,
  MenuButton,
  Transition,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import AttachmentSvg from "../pages/chats/builder/svgs/attachment";
import AppIcon from "@/components/ui/Icon";
import { FileType } from "@/types";

const menuOptions = [
  {
    text: "Connect to Google Drive",
    icon: "logos:google-drive",
  },
  {
    text: "Connect to Microsoft One Drive",
    icon: "logos:microsoft-onedrive",
  },
  {
    text: "Upload from computer",
    icon: "lucide:upload",
  },
];

export default function UploadMenu({
  handleFileUpload,
}: {
  handleFileUpload: (e: FileType) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    // Trigger file input click event
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      const file = files[0]; // Get the first selected file

      // Extract the file extension (after the last dot in the file name)
      const fileExtension = file.name.split(".").pop()?.toLowerCase() || "";

      // Extract the file name without extension
      const fileName = file.name.split(".").slice(0, -1).join(".");

      // Convert the file to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        handleFileUpload({ fileName, fileExtension, base64 });
      };
      reader.readAsDataURL(file); // Start reading the file as base64
    }
  };

  return (
    <Menu as="div" className="relative flex">
      <MenuButton
        aria-label="attach"
        type="button"
        className="cursor-pointer outline-none"
      >
        <AttachmentSvg />
      </MenuButton>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute bottom-16 right-0 mt-2 p-1 origin-bottom-left rounded-md bg-white menu_shadow focus:outline-none">
          {menuOptions.map((option) => (
            <MenuItem key={option.text}>
              {({ active }) => (
                <button
                  type="button"
                  onClick={
                    option.text === "Upload from computer"
                      ? handleUploadClick
                      : undefined
                  }
                  className={`${
                    active ? "bg-gray-100" : ""
                  } group flex cursor-pointer items-center gap-x-2 w-full whitespace-nowrap px-3 py-3 text-sm last:border-t border-main/10 text-gray/70 font-semibold`}
                >
                  <span className="w-6">
                    <AppIcon icon={option.icon} iconClass="text-main" />
                  </span>
                  {option.text}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </Menu>
  );
}
