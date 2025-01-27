"use client";

import { FaHome, FaFileAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Home", url: "/", icon: FaHome },
  { title: "Resume", url: "/resume", icon: FaFileAlt },
];

const socialItems = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/rafael-diaz1/",
    icon: FaLinkedin,
    isExternal: true,
  },
  {
    title: "GitHub",
    url: "https://github.com/availe",
    icon: FaGithub,
    isExternal: true,
  },
];

export function AppSidebar() {
  const { setOpen, setOpenMobile, isMobile } = useSidebar();

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title} className={isMobile ? "py-1" : ""}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} onClick={handleLinkClick}>
                      <item.icon />
                      <span className={isMobile ? "text-lg" : ""}>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className="my-2" />
        <SidebarGroup>
          <SidebarGroupLabel>Connect</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialItems.map((item) => (
                <SidebarMenuItem key={item.title} className={isMobile ? "py-1" : ""}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={handleLinkClick}
                    >
                      <item.icon />
                        <span className={isMobile ? "text-lg" : ""}>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
