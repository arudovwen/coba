import ModelLayout from "@layouts/ModelLayout";

export async function clientLoader() {
  return {
    title: "Documebtation",
  };
}

export default function Docs() {
  return <ModelLayout>Doc</ModelLayout>;
}
