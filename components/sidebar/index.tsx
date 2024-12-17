"use client";
import {
  ArrowUpDown,
  BookUser,
  Box,
  Building2,
  Calendar,
  Caravan,
  ChevronDown,
  Clock,
  Headset,
  Home,
  LayoutDashboard,
  Menu,
  Pin,
  Quote,
  Ratio,
  Rocket,
  ShoppingBasket,
  Store,
  TicketX,
  User
} from "lucide-react";

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
  useSidebar
} from "@/components/ui/sidebar";

const sidebarItems = [
  {
    label: "My Work",
    details: [
      {
        title: "Sales Accelerator",
        url: "#",
        icon: Rocket
      },
      {
        title: "Dashboards",
        url: "#",
        icon: LayoutDashboard
      },
      {
        title: "Activities",
        url: "#",
        icon: Calendar
      }
    ]
  },
  {
    label: "Customers",
    details: [
      {
        title: "Accounts",
        url: "#",
        icon: Building2
      },
      {
        title: "Contacts",
        url: "#",
        icon: User
      }
    ]
  },
  {
    label: "Sales",
    details: [
      {
        title: "Leads",
        url: "#",
        icon: Headset
      },
      {
        title: "Opportunities",
        url: "#",
        icon: Ratio
      },

      {
        title: "Competitors",
        url: "#",
        icon: BookUser
      }
    ]
  },
  {
    label: "Collateral",
    details: [
      {
        title: "Quotes",
        url: "#",
        icon: Quote
      },
      {
        title: "Orders",
        url: "#",
        icon: ArrowUpDown
      },

      {
        title: "Invoices",
        url: "#",
        icon: TicketX
      },
      {
        title: "Products",
        url: "#",
        icon: Box
      },

      {
        title: "Sales Literature",
        url: "#",
        icon: ShoppingBasket
      }
    ]
  },
  {
    label: "Marketing",
    details: [
      {
        title: "Marketing lists",
        url: "#",
        icon: Store
      },
      {
        title: "Quick Campaigns",
        url: "#",
        icon: Caravan
      }
    ]
  }
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader className="mt-16">
        <button
          onClick={toggleSidebar}
          aria-label="toggle sidebar"
          className="ml-1.5 "
        >
          <Menu size={20} />
        </button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href={"#"}>
                  <Home />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <span className="flex items-center justify-between">
                  <a href={"#"} className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>Recent</span>
                  </a>
                  <ChevronDown />
                </span>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <span className="flex items-center justify-between">
                  <a href={"#"} className="flex items-center gap-2">
                    <Pin size={16} />
                    <span>Pinned</span>
                  </a>
                  <ChevronDown />
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {sidebarItems.map((item) => (
          <SidebarGroup key={item.label}>
            <SidebarGroupLabel className="text-sm text-gray-700 font-semibold">
              {item.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.details.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
