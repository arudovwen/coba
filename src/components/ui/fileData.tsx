import FileSvg from "@/assets/svgs/file";

export default function FileData({
  fileName,
  extension,
}: {
  fileName: string;
  extension: string;
}) {
  return (
    <div className="bg-[#3D3F9412] flex gap-x-2 items-center  rounded-xl py-[5px] px-2 w-full">
      <FileSvg />
      <div className="flex flex-col">
        <span className="text-[#333] text-xs max-w-[120px] truncate">{fileName}</span>
        <span className="text-xs text-[#33333380]">{extension}</span>
      </div>
    </div>
  );
}
