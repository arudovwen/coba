import LoginComponent from "@components/pages/auth/login";
import AuthLayout from "@layouts/AuthLayout";

export async function clientLoader() {
  return {
    title: "Login",
  };
}


export default function Component() {
  return (
    <AuthLayout>
     <LoginComponent />
    </AuthLayout>
  );
}
