"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function HourDropdown({ value = "", onChange }) {
  const [select, setSelect] = useState(value);
  const options = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const handleSelectChange = (value) => {
    setSelect(value);
    if (onChange) {
      onChange(value);
    }
  };
  // Update local state when prop changes
  useEffect(() => {
    if (value !== select) {
      setSelect(value);
    }
  }, [value]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {select || value}
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-(--radix-dropdown-menu-trigger-width)">
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => handleSelectChange(option)}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
