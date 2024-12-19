import { MailOpenIcon, Sparkles } from "lucide-react";
import React from "react";

const KeyActivitiesCard = () => {
  return (
    <div className="border border-gray-100 rounded-lg shadow-sm p-2">
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 bg-gray-400 rounded-full" />
        <div>
          <h3 className="font-semibold opacity-85">
            Cafe A100 for Woodland Bank
          </h3>
          <p className="text-xs text-gray-500">
            Woodland Bank · $280,000 · 8 days to close
          </p>
        </div>
      </div>
      <div className="bg-blue-50/70 rounded-lg p-2 mt-2 relative">
        <div className="text-xs flex items-center gap-2 opacity-90">
          <MailOpenIcon size={16} /> Review draft and reply to Chris Naido
        </div>

        <Sparkles className="stroke-transparent fill-blue-500 absolute top-0 right-0 w-5 h-5  bg-white rounded-full " />
      </div>
    </div>
  );
};

export default KeyActivitiesCard;
