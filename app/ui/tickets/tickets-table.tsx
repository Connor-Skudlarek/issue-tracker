import { Fragment } from "react";
import { myData } from "@/app/lib/definitions";

export function buildTable(data: myData[]) {
  const ticketTable = (
    <table className="h-[100%] w-[100%] table-auto bg-my-mint/[30%] p-4 text-center">
      <thead className="h-12 rounded-lg bg-my-navy text-my-grey">
        <tr className="">
          <th className="rounded-tl-lg">ID</th>
          <th>Priority</th>
          <th>Description</th>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Latest Comment</th>
          <th>Date Created</th>
          <th className="rounded-tr-lg">Complete Date</th>
        </tr>
      </thead>
      <tbody className="rounded-b-lg">
        {data.map((ticket, i) => (
          <Fragment key={i}>{oneTicketRow(ticket)}</Fragment>
        ))}
      </tbody>
    </table>
  );
  return ticketTable;
}

function oneTicketRow(ticketObject: myData) {
  let latestComment = ticketObject.comments[ticketObject.comments.length - 1];
  return (
    <tr className="lg-p4">
      <td className="lg:p-4">{ticketObject.ticketID}</td>
      <td className="lg:p-4">{ticketObject.priority}</td>
      <td className="lg:p-4">{ticketObject.description}</td>
      <td className="lg:p-4">{ticketObject.assigned}</td>
      <td className="lg:p-4">{ticketObject.status}</td>
      <td className="lg:p-4">{latestComment}</td>
      <td className="lg:p-4">{ticketObject.dateCreated}</td>
      <td className="lg:p-4">{ticketObject.completeDate}</td>
    </tr>
  );
}
