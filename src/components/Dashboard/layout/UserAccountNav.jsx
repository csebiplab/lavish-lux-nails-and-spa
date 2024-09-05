"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { getCapitalLettersOfName } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropDownMenu";

export default function UserAccountNav({ user }) {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none cursor-pointer" asChild>
        <Avatar>
          <AvatarImage src={user?.image} />
          <AvatarFallback>
            {user?.name && getCapitalLettersOfName(user?.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="text-md p-2 flex flex-col">
          <Link href="/dashboard/admin/profile">
            {user?.name && getCapitalLettersOfName(user?.name)}
          </Link>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: `${baseAPIUrl}` })}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
