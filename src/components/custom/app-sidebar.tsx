"use client"

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
} from "@/components/ui/sidebar"
import {
  FaHome,
  FaBlog,
  FaFileAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"
import { IconType } from "react-icons"
import Link from "next/link"

interface MenuItem {
  title: string
  url: string
  icon: IconType
  isExternal?: boolean
}

// Internal navigation links
const mainItems: MenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: FaHome,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: FaBlog,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: FaFileAlt,
  },
]

// Social media link
const socialItems: MenuItem[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: FaLinkedin,
    isExternal: true,
  },
  {
    title: "GitHub",
    url: "https://github.com",
    icon: FaGithub,
    isExternal: true,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {/* Main (internal) navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Separator for spacing */}
        <SidebarSeparator className="my-2" />

        {/* Social media links */}
        <SidebarGroup>
          <SidebarGroupLabel>Connect</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialItems
            .map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
