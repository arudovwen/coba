import { ReactNode, FC } from "react";

// Optional: Type the return object if using a framework like Remix or RRD
export async function clientLoader() {
  return {
    title: "Auth",
  };
}

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="flex pt-[100px] justify-center w-screen h-screen auth_bg">
      <div className="w-full mx-auto max-w-xl">{children}</div>
    </section>
  );
};

export default AuthLayout;
