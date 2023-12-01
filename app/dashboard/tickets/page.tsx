import { Metadata } from "next";
import { getFakeData } from "@/app/lib/utils";
import { buildTable } from "@/app/ui/tickets/tickets-table";

let myFakeData = getFakeData();
let tickets = buildTable(myFakeData);

export default function Page() {
  return (
    <div className="">
      <div id="all-tickets" className="overflow-auto relative rounded-lg p-4">
        {tickets}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Tickets",
};
