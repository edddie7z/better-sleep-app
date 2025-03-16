import React from "react";
import HourDropdown from "./HourDropdown";
import MinuteDropdown from "./MinuteDropdown";
import MDropdown from "./MDropdown";

function TimeDropdown() {
  return (
    <div className="flex justify-center items-center gap-2">
      <HourDropdown />
      :
      <MinuteDropdown />
      <MDropdown />
    </div>
  );
}

export default TimeDropdown;
