"use client";
import { Icons } from "./icons";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropDownMenu";
import { dashboardConfig } from "@/constants/dashboard/dashboard.constants";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-10 w-10  items-center justify-center p-2 hidden hover:bg-gray-2 transition-colors outline-none rounded-lg max-md:flex">
        <Icons.menu size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {dashboardConfig.sidebarNav.map((link, i) => {
          const Icon = Icons[link.icon];
          return (
            <DropdownMenuItem key={i} asChild>
              <Link
                href={link.href}
                className={cn(
                  "py-1 text-sm px-2 rounded-md flex flex-row gap-2 transition-colors items-center ",
                  pathname === link.href ? "bg-gray-2" : ""
                )}
              >
                <Icon size={16} />
                {link.title}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
