import Button from "@/components/Button";
import DocumentSvg from "./svgs/document";
import AppIcon from "@/components/ui/Icon";

export default function DocCard() {
  return (
    <div className="doc_card rounded p-4 bg-white text-center relative">
      <div className="mb-2 flex justify-center">
        <DocumentSvg />
      </div>
      <span className="block text-center text-[#333333B2] font-semibold mb-2">
        Doc name
      </span>
      <span className=" text-[#333333B2] text-sm block mb-4">This is a breif description of this document type</span>
      <Button
        text="View"
        className="!border-main !border bg-transparent !text-main"
      />

      <button
        className="absolute top-3 right-3 text-red"
        type="button"
        aria-label="delete"
      >
        <AppIcon icon="fe:trash" />
      </button>
    </div>
  );
}
