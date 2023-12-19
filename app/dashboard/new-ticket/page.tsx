import { createNewTicket } from "../../lib/tickets/new-ticket";
import { redirect } from "next/navigation";

async function postNewTicket(formData: FormData) {
  "use server";
  await createNewTicket(formData);
  redirect("/dashboard");
}

export default function page() {
  return (
    <div>
      This is where individual tickets can be submitted.
      <form action={postNewTicket} className="flex flex-col">
        <label htmlFor="submittedBy">User ID number: </label>
        <input id="submittedBy" name="submittedBy" type="number" />
        <fieldset>
          <legend>Priority level: </legend>
          <div id="priority">
            <input type="radio" value="1" id="P1" name="priority" />
            <label htmlFor="P1">
              1—Critical {"(needs immediate attention and problem is: "}
              <span className="font-bold">UNKNOWN{")"}</span>
            </label>
            <input type="radio" value="2" id="P2" name="priority" />
            <label htmlFor="P2">
              2—High {"(needs immediate attention and problem is: "}
              <span className="font-bold">KNOWN{")"}</span>
            </label>

            <input type="radio" value="3" id="P3" name="priority" />
            <label htmlFor="P3">
              3—Moderate {"(needs resources as available—time sensitive)"}
            </label>

            <input type="radio" value="4" id="P4" name="priority" />
            <label htmlFor="P4">
              4—Low {"(needs resources as available—time irrelevant)"}
            </label>
            <input type="radio" value="5" id="P5" name="priority" />
            <label htmlFor="P5">
              5—Unclear/Exploratory{" "}
              {"(issue not explored enough to prioritize)"}
            </label>
          </div>
        </fieldset>
        <label htmlFor="description">
          Description: <input id="description" name="description"></input>
        </label>
        <label htmlFor="neededByDate">
          Requested Complete Date:{" "}
          <input
            id="neededByDate"
            name="neededByDate"
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
