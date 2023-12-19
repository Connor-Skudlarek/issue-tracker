"use client"
import { usePathname } from "next/navigation";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const id = usePathname().split("/").pop()
  return (
    <div>
      This is where individual tickets can be viewed. This one is ID: {id}. Only devs and admins will
      see this in the future.
    </div>
  );
}
