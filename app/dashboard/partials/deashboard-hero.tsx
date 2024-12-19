import { Brain } from "lucide-react";
import React from "react";
import EmployeeCard from "../components/employee-card";
import KeyActivitiesCard from "../components/key-activities-card";

const DashboardHero = () => {
  return (
    <section className="mx-4 shadow-2xl">
      <div className="border-2 border-blue-700 rounded-xl shadow-lg p-5">
        <div>
          <h1 className="font-semibold flex gap-2 text-gray-800">
            <Brain className="text-blue-400" />
            <span>
              Hi Mona, <span className="text-blue-700">68%</span> of goal
              achieved and rest can be achieved by focusing on top 20 leads.
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className="sm:grid sm:grid-cols-2 gap-5 sm:col-span-2 space-y-3 sm:space-y-0">
            <p className="text-gray-500 my-3 mt-6 text-sm col-span-2">
              Copilot has pinpointed 20 key leads that show strong purhase
              intent and are actively engaging. These leads need your focus
            </p>
            <EmployeeCard />
            <EmployeeCard />
          </div>
          <div className="sm:col-span-2 xl:col-span-1">
            <div className="xl:border-l border-gray-100 xl:pl-8 xl:ml-4">
              <h5 className="font-semibold text-gray-600 text-lg mb-3">
                Other key activities
              </h5>
              <div className="space-y-3 ">
                <KeyActivitiesCard />
                <KeyActivitiesCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHero;
