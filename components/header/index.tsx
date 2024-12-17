import {
  Grip,
  Lightbulb,
  MailQuestion,
  Plus,
  Settings,
  User2Icon
} from "lucide-react";
import React from "react";

const headerDetails = [
  {
    name: "hint",
    icon: <Lightbulb strokeWidth={1.2} />
  },
  {
    name: "add",
    icon: <Plus strokeWidth={1.2} />
  },
  {
    name: "settings",
    icon: <Settings strokeWidth={1.2} />
  },
  {
    name: "question",
    icon: <MailQuestion strokeWidth={1.2} />
  },
  {
    name: "profile",
    icon: <User2Icon strokeWidth={1.2} />
  },
  {
    name: "user",
    icon: <User2Icon strokeWidth={1.2} />
  }
];

const Header = () => {
  return (
    <nav className="bg-blue-950 fixed w-full z-50 top-0">
      <div className="flex justify-between text-slate-300 p-4 items-center">
        <div className="flex items-center gap-4 ">
          <div className="inline-flex items-center">
            <button aria-label="Company logo">
              <Grip className="" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold border-r border-slate-400 pr-4">
              Dynamic 365
            </h2>
            <h3 className="text-sm font-medium">Sales hub </h3>
          </div>
        </div>
        <div className="flex items-center gap-8 text-slate-400">
          {headerDetails.map((detail) => (
            <button
              key={detail.name}
              aria-label={detail.name}
              className="hover:text-white w-2.5 h-2.5"
            >
              {detail.icon}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
