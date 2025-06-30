import Button from "@/components/Button";
import TextArea from "@/components/Form/Textarea";
import TextInput from "@/components/Form/TextInput";

export default function NewModel() {
  return (
    <div className="bg-white  relative mx-auto w-full">
      <form>
        <h2 className="mb-6 font-semibold text-gray/70">New Model</h2>
        <div className="grid gap-y-4 mb-6">
          <TextInput
            label="Model Name"
            placeholder={"name@mail.com"}
            name={""}
          />
          <TextArea
            label="Model description"
            placeholder={"Enter description"}
            rows={3}
            name={""}
          />
        </div>
        <div>
          <Button text={"Submit"} />
        </div>
      </form>
    </div>
  );
}
