"use client";

import { useAuthContext } from "@/app/theme-provider";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import React from "react";

function AppHeader() {
  const { user } = useAuthContext();
  return (
    <div className=" p-3 flex justify-between items-center">
      <SidebarTrigger />
      <Image
        className=" rounded-full"
        src={user?.photoURL}
        alt="user"
        width={40}
        height={40}
      />
    </div>
  );
}

export default AppHeader;
