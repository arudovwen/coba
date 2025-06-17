import Button from "@Button";
import TextInput from "@Form/TextInput";
import AuthHeader from "@ui/AuthHeader";
import { Link } from "react-router";

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
          <TextInput
            label="New Password"
            placeholder={"Minimum 8 characters"}
            type="password"
            name={""}
          />
          <TextInput
            label="Confirm Password"
            placeholder={"Confirm new password"}
            type="password"
            name={""}
          />
        </div>
        <div className="mt-10">
          <Button text={"Submit"} />
        </div>
      </form>
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
    </div>
  );
}
