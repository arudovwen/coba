import Button from "../../Button";
import TextInput from "../../Form/TextInput";
import AuthHeader from "../../ui/AuthHeader";

export default function PasswordResetComponent() {
  return (
    <div className="auth_shadow bg-white px-8 pt-10 pb-8 w-[500px]">
      <div className="mb-8">
        <AuthHeader
          title=" Reset your Password"
          text=" Create your new password"
        />
      </div>
      <form>
        <div className="grid gap-y-4">
          <TextInput placeholder={"name@mail.com"} name={""} />
          <TextInput placeholder={"name@mail.com"} name={""} />
        </div>
        <div className="mt-10">
          <Button text={"Submit"} />
        </div>
      </form>
    </div>
  );
}
