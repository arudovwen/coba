import DocCard from "./doc-card";

export default function DocIndex() {
  const content = ["", "", "", "", "", "", "","", "", "", "", ""];
  return (
    <div className="grid grid-cols-5 gap-6">
      {content.map((i) => (
        <DocCard key={i} />
      ))}
    </div>
  );
}
