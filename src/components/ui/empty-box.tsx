import { ReactNode } from "react";

export default function EmptyBox({
  title,
  icon,
  text,
}: {
  title: string;
  icon: ReactNode;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <p className="font-semibold text-4xl text-gray/70 mb-4"> {title}</p>
      <div> {icon}</div>
      <p className="font-normal text-lg text-gray/70"> {text}</p>
    </div>
  );
}
