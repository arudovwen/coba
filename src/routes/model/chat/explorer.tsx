import ExploreIndex from "@/components/pages/chats/explorer";

export async function clientLoader() {
  return {
    title: "Explorer",
  };
}

export default function Chats() {
  return <section className="h-full"><ExploreIndex /></section>;
}
