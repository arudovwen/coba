import { ReactNode, FC } from "react";

// Optional: Type the return object if using a framework like Remix or RRD
export async function clientLoader() {
  return {
    title: "Auth",
  };
}

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="flex lg:pt-[100px] justify-center w-screen min-h-screen auth_bg px-4 lg:px-0">
      <div className="w-full mx-auto max-w-xl">{children}</div>
    </section>
  );
};

export default AuthLayout;
