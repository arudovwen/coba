export default function AuthHeader({
  title,
  text,
}: {
  title: string;
  text?: string;
}) {
  return (
    <div>
      {" "}
      <h1 className="text-center text-main font-semibold text-2xl">{title}</h1>
      <div className="py-[10px] px-5 rounded bg-[#3D3F941A] mt-5">
        {text && (
          <p className="text-center text-gray/70 font-semibold text-sm">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
