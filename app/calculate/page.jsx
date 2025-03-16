import React from "react";
import TimeDropdown from "@/components/TimeDropdown";

export default function Calculate() {
  return (
    <>
      <div className="flex justify-center items-center gap-5">
        Sleep Time
        <TimeDropdown />
      </div>
      <br />
      <div className="flex justify-center items-center gap-5">
        Wake Time
        <TimeDropdown />
      </div>
    </>
  );
}
