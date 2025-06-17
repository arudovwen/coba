import PasswordResetComponent from "../../components/pages/auth/password-reset";
import AuthLayout from "../../layouts/AuthLayout";

export async function clientLoader() {
  return {
    title: "Login",
  };
}


export default function Component() {
  return (
    <AuthLayout>
     <PasswordResetComponent />
    </AuthLayout>
  );
}
