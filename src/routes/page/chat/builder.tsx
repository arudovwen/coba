import BuilderIndex from "@/components/pages/chats/builder";

export async function clientLoader() {
  return {
    title: "Builder",
  };
}

export default function Builder() {
  return <section className="h-full"><BuilderIndex /></section>;
}
