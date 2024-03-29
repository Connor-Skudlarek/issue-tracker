import { Fragment } from "react";
import { ww_ticket } from "@/app/lib/definitions";
import Link from "next/link";

export function buildTable(data: ww_ticket[]) {
  const ticketTable = (
    <table className="h-[100%] w-[100%] table-auto bg-my-mint/[30%] p-4 text-center">
      <thead className="h-12 rounded-lg bg-my-navy text-my-grey">
        <tr className="">
          <th className="rounded-tl-lg text-center">ID</th>
          <th>Priority</th>
          <th>Description</th>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Date Created</th>
          <th className="rounded-tr-lg">Complete Date</th>
        </tr>
      </thead>
      <tbody className="rounded-b-lg [&>*:nth-child(odd)]:bg-my-grey">
        {data.map((ticket, i) => (
          <Fragment key={i}>{oneTicketRow(ticket)}</Fragment>
        ))}
      </tbody>
    </table>
  );
  return ticketTable;
}

function oneTicketRow(ticketObject: ww_ticket) {
  return (
    <tr className="lg:p-2">
      <td className="px-1 md:py-1 lg:py-2">
        <Link
          href={`/dashboard/tickets/${ticketObject.id}`}
          className="font-bold text-blue-600 antialiased"
        >
          {ticketObject.id}
        </Link>
      </td>
      <td className="px-1 md:py-1 lg:py-2">{ticketObject.priority}</td>
      <td className="px-1 md:py-1 lg:py-2">{ticketObject.description}</td>
      <td className="px-1 md:py-1 lg:py-2">{ticketObject.assigned}</td>
      <td className="px-1 md:py-1 lg:py-2">{ticketObject.status}</td>
      <td className="px-1 md:py-1 lg:py-2">{ticketObject.dateCreated}</td>
      <td className="px-1 md:py-1 lg:py-2">{ticketObject.completeDate}</td>
    </tr>
  );
}
