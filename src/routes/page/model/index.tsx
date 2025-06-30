import ModelIndex from "@/components/pages/model";
import ModelLayout from "@/layouts/ModelLayout";

export async function clientLoader() {
  return {
    title: "Chat",
  };
}

export default function Chats() {
  return (
    <ModelLayout>
      <ModelIndex />
    </ModelLayout>
  );
}
