import React from "react";
import TimeDropdown from "@/components/TimeDropdown";
import { BorderBeam } from "@/components/magicui/border-beam";

function CalculateForm() {
  return (
    <div className="">
      <div className="flex flex-col border-2 py-8 rounded-4xl gap-5 relative overflow-hidden">
        <div className="justify-items-start pl-10 pb-5 text-primary text-3xl font-semibold">
          Calculate
        </div>
        <div className="flex flex-row justify-between px-10 gap-10">
          <span className="flex flex-col w-full gap-2">
            <label className="text-left text-primary">Sleep:</label>
            <div className="flex gap-2">
              <TimeDropdown />
            </div>
          </span>
          <span className="flex flex-col w-full gap-2">
            <label className="text-left text-primary">Wake:</label>
            <div className="flex">
              <TimeDropdown />
            </div>
          </span>
        </div>
        <span className="flex justify-center items-center pt-5">
          <div className="flex justify-center items-center border-2 w-[15%] rounded-lg py-1 bg-background hover:bg-accent cursor-pointer mx-auto">
            Clear
          </div>
          <div className="flex justify-center items-center border-2 w-[15%] rounded-lg py-1 bg-accent hover:bg-background cursor-pointer mx-auto">
            Add
          </div>
        </span>
        <BorderBeam
          size={300}
          duration={12}
          className="from-transparent accent to-transparent"
        />
        <BorderBeam
          size={300}
          duration={12}
          delay={6}
          className="from-transparent accent to-transparent"
        />
      </div>
    </div>
  );
}

export default CalculateForm;
