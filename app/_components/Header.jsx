import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className=" p-4 flex items-center justify-between">
      <div className=" flex items-center gap-2">
        <Image src="/logo.svg" height={30} width={30} alt="logo" />
        <h2 className=" text-2xl font-bold">Video Gen</h2>
      </div>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
