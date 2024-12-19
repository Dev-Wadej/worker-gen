import { Mail, Sparkles } from "lucide-react";
import React from "react";

const EmployeeCard = () => {
  return (
    <div className="border border-gray-100 shadow-sm rounded-xl p-3 text-sm ">
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 bg-purple-400 rounded-full" />
        <div>
          <h3 className="font-semibold text-gray-700">Jane Reyes</h3>
          <p className="text-xs text-gray-500">COO · Northwind Traders</p>
        </div>
      </div>
      <div className="bg-blue-50/70 rounded-lg p-3 my-3 relative">
        <div className="font-semibold flex items-center gap-2 text-gray-700">
          <Mail size={16} /> Engage with Jane Reyes
        </div>
        <div>
          <p>
            Jane may be interested in upgrading espresso machines for her
            in-store coffe shops
          </p>
        </div>

        <Sparkles className="stroke-transparent fill-blue-500 absolute top-0 right-0 w-5 h-5  bg-white rounded-full " />
      </div>
      <p className="text-xs text-gray-500">
        Expand business · High buying intent
      </p>
    </div>
  );
};

export default EmployeeCard;
