import ModelLayout from "@layouts/ModelLayout";

export async function clientLoader() {
  return {
    title: "Data",
  };
}

export default function Data() {
  return (
    <ModelLayout>
      Data
    </ModelLayout>
  );
}
