"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export default function MinuteDropdown() {
  const [select, setSelect] = useState("");
  const options = ["00", "15", "30", "45"];

  const handleSelectChange = (value) => {
    setSelect(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {select}
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
