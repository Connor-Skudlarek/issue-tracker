"use client";

import {
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "Home",
    href: "/dashboard",
    icon: HomeIcon,
    "aria-label": "Home Page Link",
  },
  {
    name: "Tickets",
    href: "/dashboard/tickets",
    icon: DocumentDuplicateIcon,
    "aria-label": "Tickets Page Link",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:shadow-xl hover:bg-my-mint/[100%] md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-my-mint/[80%] shadow-xl": pathname === link.href,
              }
            )}
            aria-label={link["aria-label"]}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
