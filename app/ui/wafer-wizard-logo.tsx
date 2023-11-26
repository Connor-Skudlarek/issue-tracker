import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function WaferWizardsLogo() {
  return (
    <div
      className={`${lusitana.className} flex h-fit w-fit flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Wafer Wizards</p>
    </div>
  );
}
