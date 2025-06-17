import TwoFaComponent from "@components/pages/auth/two-factor-authentication";
import AuthLayout from "@layouts/AuthLayout";

export async function clientLoader() {
  return {
    title: "Login",
  };
}


export default function Component() {
  return (
    <AuthLayout>
     <TwoFaComponent />
    </AuthLayout>
  );
}
