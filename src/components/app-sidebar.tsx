"use client";
import * as React from "react";
import {
  AudioWaveform,
  // BookOpen,
  // Bot,
  Command,
  // Frame,
  GalleryVerticalEnd,
  // Map,
  // PieChart,
  // Settings2,
  // SquareTerminal,
} from "lucide-react";

import { NavUser } from "@/components/nav-user";
import { SearchForm } from "@/components/search-form";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    // {
    //   title: "Getting Started",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Installation",
    //       url: "#",
    //     },
    //     {
    //       title: "Project Structure",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "Maneja tu Gym",
      url: "#",
      items: [
        {
          title: "Inicio",
          url: "#",
          isActive: true,
        },
        {
          title: "Socios",
          url: "#",
        },
        {
          title: "Caja",
          url: "#",
        },
        {
          title: "Pagos",
          url: "#",
        },
        {
          title: "Productos",
          url: "#",
        },
        // {
        //   title: "Optimizing",
        //   url: "#",
        // },
        // {
        //   title: "Configuring",
        //   url: "#",
        // },
        // {
        //   title: "Testing",
        //   url: "#",
        // },
        // {
        //   title: "Authentication",
        //   url: "#",
        // },
        // {
        //   title: "Deploying",
        //   url: "#",
        // },
        // {
        //   title: "Upgrading",
        //   url: "#",
        // },
        // {
        //   title: "Examples",
        //   url: "#",
        // },
      ],
    },
    // {
    //   title: "API Reference",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Components",
    //       url: "#",
    //     },
    //     {
    //       title: "File Conventions",
    //       url: "#",
    //     },
    //     {
    //       title: "Functions",
    //       url: "#",
    //     },
    //     {
    //       title: "next.config.js Options",
    //       url: "#",
    //     },
    //     {
    //       title: "CLI",
    //       url: "#",
    //     },
    //     {
    //       title: "Edge Runtime",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Architecture",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Accessibility",
    //       url: "#",
    //     },
    //     {
    //       title: "Fast Refresh",
    //       url: "#",
    //     },
    //     {
    //       title: "Next.js Compiler",
    //       url: "#",
    //     },
    //     {
    //       title: "Supported Browsers",
    //       url: "#",
    //     },
    //     {
    //       title: "Turbopack",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
