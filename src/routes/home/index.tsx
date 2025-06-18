export async function clientLoader() {
  // you can now fetch data here
  return {
    title: "Home page",
  };
}

export default function Component() {
  return <h1 className="text-3xl font-bold text-green-500 underline">Hello world!</h1>;
}
