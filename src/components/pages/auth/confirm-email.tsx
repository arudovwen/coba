import AuthHeader from "../../ui/AuthHeader";

export default function ConfirmEmailComponent() {
  return (
    <div className="auth_shadow bg-white px-8 py-14 max-w-[500px] w-full">
      <h1 className="text-center text-main font-semibold text-3xl mb-6">
        Confirm Email
      </h1>
      <div className="mb-8">
        <AuthHeader title="Confirm Emailt" />
      </div>
      <div className="py-[10px] px-5 rounded bg-[#3D3F941A]">
        <p className="text-center text-gray/70 font-semibold text-base">
          A confirmation link has been sent to olauwa*****@databliz.com. Please
          click on the link to verify account
        </p>
      </div>
    </div>
  );
}
