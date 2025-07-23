export async function clientLoader() {
  // you can now fetch data here
  return {
    title: "Home page",
  };
}

export default function Component() {
  return (
    <div className="text-3xl font-bold text-green-500 underline h-screen bg-main">
      <iframe
        src="https://jupyterlite.github.io/demo/lab"
        width="100%"
        height="100%"
        title="JupyterLite"
      />
    </div>
  );
}
