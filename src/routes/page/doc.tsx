import DocIndex from "@/components/pages/docs";
import DocBar from "@/components/pages/docs/doc-bar";

export async function clientLoader() {
  return {
    title: "Documents",
  };
}

export default function Docs() {
  return (
    <section className="doc_sectino__shadow container bg-white p-6 rounded mx-auto mt-4">
      <h1 className="text-[#333333B2] font-semibold text-xl mb-6">Documents</h1>
      <div>
      <div className="mb-8">
          <DocBar />
      </div>
        <DocIndex />
      </div>
    </section>
  );
}
