import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import WaferWizardsLogo from "@/app/ui/wafer-wizard-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-my-mint p-4 md:h-40"
        href="/"
      >
        <div className="w-fit text-white md:w-40">
          <WaferWizardsLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden mt-40 h-auto w-full grow rounded-md bg-my-navy/[80%] md:block"></div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            id="sign-out"
            aria-label="Sign Out"
            className="bg-my-navy text-my-mint/[70%] flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-my-grey hover:text-black md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
