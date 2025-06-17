import Button from "../../Button";
import TextInput from "../../Form/TextInput";
import AuthHeader from "../../ui/AuthHeader";

export default function ForgotPasswordComponent() {
  return (
    <div className="auth_shadow bg-white px-8 pt-10 pb-8 max-w-[500px] w-full">
      <div className="mb-8">
        <AuthHeader
          title="Password Reset"
          text="Please enter your email address in the field below to receive a
          password reset link"
        />
      </div>
      <form>
        <div className="grid gap-y-4">
          <TextInput placeholder={"name@mail.com"} name={""} />
        </div>
        <div className="mt-10">
          <Button text={"Send Password Reset Link"} />
        </div>
      </form>
    </div>
  );
}
