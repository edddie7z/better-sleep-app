"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "@/components/magicui/particles";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span
        className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none"
        color={color}
      >
        Your Ticket To
        <br />
        <AuroraText>Better Sleep</AuroraText>
      </span>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
