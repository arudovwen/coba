import AnalyzerIndex from "@/components/pages/chats/analyzer";

export async function clientLoader() {
  return {
    title: "Analyzer",
  };
}

export default function Analyzer() {
  return (
    <section className="h-full">
      <AnalyzerIndex />
    </section>
  );
}
