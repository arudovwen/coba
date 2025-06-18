import { Link } from "react-router";
import Logo from "@components/ui/Logo";
import TextInput from "@components/Form/TextInput";
import Button from "@components/Button";
import { useState } from "react";
import PasswordBar from "@components/ui/PasswordBar";
import AppIcon from "@components/ui/Icon";

interface TabOptionsProps {
  label: string;
  value: string;
}

export default function RegisterComponent() {
  const [selected, setSelected] = useState("individual");
  const TabOptions: TabOptionsProps[] = [
    {
      label: "Individual",
      value: "individual",
    },
    {
      label: "Organization",
      value: "organization",
    },
  ];
  return (
    <div className="auth_shadow lg:bg-white px-4 lg:px-8 pt-10 pb-8 max-w-[500px]  mx-auto w-full">
      <div className="flex justify-center mb-2">
        <Logo />
      </div>
      <p className="text-center text-gray/70 font-semibold text-base mb-6">
        Welcome, Sign Up As
      </p>
      <div>
        <div className="mb-5">
          <ul className="flex justify-between">
            {TabOptions?.map((i: TabOptionsProps, index) => (
              <li
                onClick={() => setSelected(i.value)}
                className={`w-[190px] text-center inline-block text-base font-semibold py-[10px] cursor-pointer ${
                  selected === i.value ? "text-main" : "text-gray/50"
                }`}
                key={index}
              >
                {i.label}
              </li>
            ))}
          </ul>
          <div className=" bg-[#D9D9D9] rounded-full flex justify-between">
            {TabOptions?.map((i: TabOptionsProps, index) => (
              <div
                key={index}
                className={`w-[190px] py-1 h-full rounded-full ${
                  selected === i.value ? "bg-main" : "bg-transparent"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <form>
          <div className="grid gap-y-4 mb-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <TextInput
                label="First name"
                placeholder={"Enter first name"}
                name={""}
              />
              <TextInput
                label="Last name"
                placeholder={"Enter last name"}
                name={""}
              />
            </div>
            <TextInput
              placeholder={"name@mail.com"}
              type="email"
              label="Email address"
              name={""}
              rightIcon={
                <AppIcon
                  icon="octicon:mail-16"
                  iconClass="text-main text-base"
                />
              }
            />
            <div>
              <TextInput
                placeholder={"name@mail.com"}
                name={""}
                type="password"
                label="Password"
              />
              <div className="mt-2">
                {" "}
                <PasswordBar percent={0} />
              </div>
            </div>
            <TextInput
              label="Confirm Password"
              placeholder={"Minimum 8 characters"}
              type="password"
              name={""}
            />
            {selected === "organization" && (
              <TextInput
                label="Organization name"
                placeholder={"Enter last name"}
                name={""}
              />
            )}
          </div>
          <div>
            <Button text={"Sign Up"} />
          </div>
        </form>
        <div className="mb-6">
          <div className="flex justify-center items-center gap-x-1 my-8">
            <div className="border-b flex-1 border-gray/20" />{" "}
            <span className="text-base font-semibold text-gray/50">OR</span>{" "}
            <div className="border-b flex-1  border-gray/20" />
          </div>

          <Button
            text={"Sign Up Using Google"}
            className="bg-[#F4F4F4] border border-[#F4F4F4] !text-gray/70"
            leftIcon={<AppIcon icon="logos:google-icon" />}
          />
        </div>
        <div className="text-base">
          <span className=" text-gray/70 font-semibold">
            Already registered?
          </span>{" "}
          <Link to={"/auth/login"}>
            <button
              type="button"
              className="cursor-pointer text-main  font-semibold"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
