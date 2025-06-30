export default function ModelDetail() {
  const detail = [
    { label: "Model Name", key: "" },
    { label: "Model Description", key: "" },
    { label: "Model Type", key: "" },
    { label: "Status", key: "" },
  ];
  return (
    <div>
      <h2 className="font-semibold text-base text-gray/70 mb-6">
        Model Configuration Details
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-[500px]">
        {detail.map((i) => (
          <div key={i.label} className="flex flex-col">
            <span className="text-sm text-gray/70">{i.label}</span>
            <span className="text-sm text-gray/70 font-semibold">
              {i.key || "-"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
