import { Metadata } from "next";
import { buildTable } from "@/app/ui/tickets/tickets-table";
import { fetchTickets } from "@/app/lib/database/get-data";

let ticketData = await fetchTickets();
let tickets = buildTable(ticketData);


export default function Page() {
  return (
    <div className="">
      <div id="all-tickets" className="overflow-auto relative rounded-lg p-2">
        {tickets}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Tickets",
};
