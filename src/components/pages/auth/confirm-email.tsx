import AuthHeader from "@components/ui/AuthHeader";
import { Link } from "react-router";

export default function ConfirmEmailComponent() {
  return (
    <div className="auth_shadow bg-white px-8 py-14 max-w-[500px] w-full">
      <div className="mb-8">
        <AuthHeader
          title="Confirm Email"
          text="A confirmation link has been sent to olauwa*****@databliz.com. Please
          click on the link to verify account"
        />
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
    </div>
  );
}
