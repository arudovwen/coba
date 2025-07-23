import DataIndex from "@/components/pages/data";

export async function clientLoader() {
  return {
    title: "Data",
  };
}

export default function Data() {
  return (
    <section className="bg-[bg-[#F5F5FA]">
      <DataIndex />
    </section>
  );
}
