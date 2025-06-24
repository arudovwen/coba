import { Link } from "react-router";
import Logo from "@components/ui/Logo";
import Button from "@components/Button";
import TextInput from "@components/Form/TextInput";
import AppIcon from "@components/ui/Icon";

export default function LoginComponent() {
  return (
    <div className="auth_shadow lg:bg-white px-4 lg:px-8 py-14 max-w-[500px] mx-auto w-full">
      <div className="flex justify-center mb-2">
        <Logo />
      </div>
      <p className="text-center text-gray/70 font-semibold text-base mb-8">
        Welcome, Login As
      </p>
      <div>
        <form>
          <div className="grid gap-y-4 mb-2">
            <TextInput
              label="Email address"
              placeholder={"name@mail.com"}
              name={""}
              type="email"
              rightIcon={
                <AppIcon
                  icon="octicon:mail-16"
                  iconClass="text-main text-base"
                />
              }
            />
            <TextInput
              label="Password"
              placeholder={"Minimum 8 characters"}
              type="password"
              name={""}
            />
          </div>
          <div>
            <div className="mb-6 flex justify-end">
              <Link to="/auth/forgot-password">
                <button
                  type="button"
                  className="text-sm font-semibold text-red"
                >
                  Forgot password?
                </button>
              </Link>
            </div>
            <Link to="/model/chats/builder">
              <Button text={"Login"} />
            </Link>
          </div>
        </form>
        <div className="mb-6">
          <div className="flex justify-center items-center gap-x-1 my-10">
            <div className="border-b flex-1 border-gray/20" />{" "}
            <span className="text-base font-semibold text-gray/50">OR</span>{" "}
            <div className="border-b flex-1  border-gray/20" />
          </div>
          <Button
            text={"Login Using Google"}
            className="bg-[#F4F4F4] border border-[#F4F4F4] !text-gray/70"
            leftIcon={<AppIcon icon="logos:google-icon" />}
          />
        </div>
        <div className="text-base">
          <span className=" text-gray/70 font-semibold">
            Not yet registered?
          </span>{" "}
          <Link to={"/auth/register"}>
            <button
              type="button"
              className="cursor-pointer text-main  font-semibold"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
