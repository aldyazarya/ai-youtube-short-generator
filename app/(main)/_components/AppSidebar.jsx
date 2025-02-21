"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Gem,
  HomeIcon,
  LucideFileVideo,
  Search,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthContext } from "@/app/theme-provider";

const MenuItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Create New Video",
    url: "/create-new-video",
    icon: LucideFileVideo,
  },
  {
    title: "Explore",
    url: "/explore",
    icon: Search,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: WalletCards,
  },
];

function AppSidebar() {
  const path = usePathname();

  const { user } = useAuthContext();
  return (
    <Sidebar>
      <SidebarHeader>
        <div>
          <div className=" flex items-center gap-3 w-full justify-center">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <h2 className="font-bold text-2xl text-black">Short Gen</h2>
          </div>
          <h2 className=" text-sm text-gray-400 text-center mt-2">
            AI Short Video Generator
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className=" mx-4 mt-8">
              <Button className="w-full">+Create New Video</Button>
            </div>
            <SidebarMenu>
              {MenuItems.map((menu, i) => (
                <SidebarMenuItem key={i} className="mt-4 mx-4">
                  <SidebarMenuButton
                    isActive={path == menu.url}
                    className="p-5"
                  >
                    <Link
                      href={menu?.url}
                      className=" flex items-center gap-4 p-3"
                    >
                      <menu.icon />
                      <span className=" font-medium">{menu?.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div className=" p-5 border rounded-lg mb-6 dark:bg-gray-800 bg-gray-200">
          <div className=" flex items-center justify-between">
            <Gem className=" text-gray-400" />
            <h2 className=" text-gray-400">{user?.credits} Credits Left</h2>
          </div>
          <Button className="w-full mt-3">Buy More Credits</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
