import Button from "@/components/Button";
import SelectDropdown from "@/components/Form/Select";

export default function ModelTrigger() {
  const options: { name: string; code: string }[] = [
    {
      name: "Every 8 hours",
      code: "8",
    },
     {
      name: "Every 12 hours",
      code: "8",
    },
     {
      name: "Every days",
      code: "8",
    },
     {
      name: "Every week",
      code: "8",
    },
  ];
  return (
    <div className="bg-white  relative mx-auto w-full">
      <form>
        <h2 className="mb-6 font-semibold text-gray/70">Model Trigger</h2>
        <div className="grid gap-y-4 mb-6">
          <SelectDropdown
            label="How often do you want it to run?"
            placeholder={""}
            name={""}
            value={{
              name: "Every 8 hours",
              code: "8",
            }}
            options={options}
            onChange={() => undefined}
          />
        </div>
        <div>
          <Button text={"Submit"} />
        </div>
      </form>
    </div>
  );
}
