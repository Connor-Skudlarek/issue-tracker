import WaferWizardsLogo from "@/app/ui/wafer-wizard-logo";
import LoginForm from "@/app/ui/login-form";
import { Metadata } from "next";

export default function LoginPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-my-navy/[95%]">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-my-mint p-3 md:h-36">
          <WaferWizardsLogo />
        </div>
        <LoginForm />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Login",
};
