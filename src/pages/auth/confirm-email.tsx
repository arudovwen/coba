import ConfirmEmailComponent from "../../components/pages/auth/confirm-email";
import AuthLayout from "../../layouts/AuthLayout";

export async function clientLoader() {
  return {
    title: "Login",
  };
}

export default function Component() {
  return (
    <AuthLayout>
      <ConfirmEmailComponent />
    </AuthLayout>
  );
}
