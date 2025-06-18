import Button from "@components/Button";
import TextInput from "@components/Form/TextInput";
import AuthHeader from "@components/ui/AuthHeader";
import AppIcon from "@components/ui/Icon";
import { Link } from "react-router";

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
          <TextInput
            placeholder={"name@mail.com"}
            type="email"
            label="Email address"
            name={""}
            rightIcon={
              <AppIcon icon="octicon:mail-16" iconClass="text-main text-base" />
            }
          />
        </div>
        <div className="mt-10">
          <Button text={"Send Password Reset Link"} />
        </div>
        <div className="text-base text-center mt-5">
          <Link to={"/auth/login"}>
            <button
              type="button"
              className="cursor-pointer text-main  font-semibold"
            >
              Back to Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
