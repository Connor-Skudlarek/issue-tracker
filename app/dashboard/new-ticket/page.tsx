"use client"
import { usePathname } from "next/navigation";
import { FormEvent } from "react";
import {Button} from "../../ui/button"
export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const id = usePathname().split("/").pop()
  

  // Continue working with this... 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/create-new-ticket', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <div>
      This is where individual tickets can be submitted.
      <form onSubmit={onSubmit} className="flex flex-col">
        <label htmlFor="priority">Priority Level: <input id="priority" name="priority" type="number"></input></label>
        <label htmlFor="description">Description: <input id="description" name="description"></input></label>
        <label htmlFor="neded-by-date">Requested Complete Date: <input id="needed-by-date" name="needed-by-date" type="datetime-local"></input></label>
        <button type="submit" className="rounded-lg bg-my-mint w-32 m-12 shadow-lg">Submit New Ticket</button>
      </form>
    </div>
  );
}
