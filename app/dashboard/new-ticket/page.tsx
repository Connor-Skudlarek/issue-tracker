
import { usePathname } from "next/navigation";
import { FormEvent } from "react";
import { Button } from "../../ui/button";
import { createNewTicket } from "../../lib/tickets/new-ticket";
export default function page() {

  return (
    <div>
      This is where individual tickets can be submitted.
      <form action={createNewTicket} className="flex flex-col">
        <label htmlFor="priority">
          Priority Level:{" "}
          <input id="priority" name="priority" type="number"></input>
        </label>
        <label htmlFor="description">
          Description: <input id="description" name="description"></input>
        </label>
        <label htmlFor="neded-by-date">
          Requested Complete Date:{" "}
          <input
            id="needed-by-date"
            name="needed-by-date"
            type="datetime-local"
          ></input>
        </label>
        <button
          type="submit"
          className="m-12 w-32 rounded-lg bg-my-mint shadow-lg"
        >
          Submit New Ticket
        </button>
      </form>
    </div>
  );
}
