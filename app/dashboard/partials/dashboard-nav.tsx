import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  ChartArea,
  ChevronDown,
  Delete,
  Edit,
  FileEdit,
  List,
  Martini,
  Plus,
  RotateCcw,
  UnfoldHorizontal
} from "lucide-react";
import React from "react";

const items = [
  {
    name: "Show chart",
    icon: <ChartArea />
  },
  {
    name: "Focused view",
    icon: <List />
  },
  {
    name: "New",
    icon: <Plus />
  },
  {
    name: "Refresh",
    icon: <RotateCcw />
  },
  {
    name: "Collaborate",
    icon: <UnfoldHorizontal />
  },
  {
    name: "Delete",
    icon: <Delete />
  }
];
const DashboardNav = () => {
  return (
    <header className="mt-20 m-4 shadow-md border border-gray-100 rounded p-1">
      <div className="flex justify-between">
        <div className="flex items-center ">
          <SidebarTrigger className="inline-block md:hidden text-gray-500" />
          <Button
            variant={"ghost"}
            className="p-1 px-2 font-semibold opacity-60"
          >
            My open leads <ChevronDown />
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <ul className="hidden xl:flex flex-wrap items-center justify-end gap-4">
            {items.map((item) => (
              <li key={item.name}>
                <Button variant={"ghost"} className="p-1 px-2 opacity-80">
                  {item.icon} {item.name}
                </Button>
              </li>
            ))}
          </ul>
          <ul className="hidden md:flex flex-wrap items-center gap-4 justify-end">
            <Button
              variant={"outline"}
              className="p-1 px-2 font-semibold opacity-60"
            >
              <Martini />
              Smart data
            </Button>
            <Button
              variant={"outline"}
              className="p-1 px-2 font-semibold opacity-60"
            >
              <Edit />
              Edit Filters
            </Button>
            <Button
              variant={"outline"}
              className="p-1 px-2 font-semibold opacity-60"
            >
              <FileEdit />
              Edit Columns
            </Button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
