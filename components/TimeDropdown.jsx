"use client";

import React, { useState, useEffect } from "react";
import HourDropdown from "./HourDropdown";
import MinuteDropdown from "./MinuteDropdown";
import MDropdown from "./MDropdown";

function TimeDropdown({ onChange, initialTime }) {
  const [selectedTime, setSelectedTime] = useState({
    hour: initialTime?.hour || "12",
    minute: initialTime?.minute || "00",
    period: initialTime?.period || "AM",
  });

  // Update parent component whenever time changes
  useEffect(() => {
    if (onChange) {
      onChange(selectedTime);
      console.log("Time changed:", selectedTime);
    }
  }, [selectedTime, onChange]);

  const handleHourChange = (hour) => {
    setSelectedTime((prev) => ({ ...prev, hour }));
  };

  const handleMinuteChange = (minute) => {
    setSelectedTime((prev) => ({ ...prev, minute }));
  };

  const handlePeriodChange = (period) => {
    setSelectedTime((prev) => ({ ...prev, period }));
  };

  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <HourDropdown value={selectedTime.hour} onChange={handleHourChange} />
        :
        <MinuteDropdown
          value={selectedTime.minute}
          onChange={handleMinuteChange}
        />
        <MDropdown value={selectedTime.period} onChange={handlePeriodChange} />
      </div>
    </>
  );
}

export default TimeDropdown;
