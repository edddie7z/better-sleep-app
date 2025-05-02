"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/magicui/particles";
import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import AnimatedPageWrapper from "@/components/AnimatedPageWrapper";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#fffcd6");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#fffcd6" : "#000000");
  }, [resolvedTheme]);

  return (
    <div>
      <AnimatedPageWrapper>
        <div>
          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-black dark:text-primary">
              Your Ticket To
              <br />
              <AuroraText>Better Sleep</AuroraText>
            </span>
            <br />
            <a href="/calculate">
              <InteractiveHoverButton className="dark:text-amber-50 hover:text-black">
                Get Started
              </InteractiveHoverButton>
            </a>
            <Particles
              className="absolute inset-0 z-0"
              quantity={100}
              ease={80}
              color={color}
              refresh
            />
          </div>
        </div>
      </AnimatedPageWrapper>
    </div>
  );
}
