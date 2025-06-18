import ForgotPasswordComponent from "@components/pages/auth/forgot-password";
import AuthLayout from "@layouts/AuthLayout";

export async function clientLoader() {
  return {
    title: "Login",
  };
}


export default function Component() {
  return (
    <AuthLayout>
     <ForgotPasswordComponent />
    </AuthLayout>
  );
}
