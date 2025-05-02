import React from "react";
import CalculateForm from "@/components/CalculateForm";
import { CycleTable } from "../../components/CycleTable";
import Image from "next/image";
import AnimatedPageWrapper from "@/components/AnimatedPageWrapper";

export default function Calculate() {
  return (
    <div>
      <AnimatedPageWrapper>
        <div className="flex justify-center my-15">
          <div className="flex flex-col gap-15">
            <span className="text-primary w-130">
              <span className="text-3xl font-semibold">
                Understanding the Sleep Cycle
              </span>
              <br />
              <br />
              Sleep occurs in repeating cycles, each lasting about 90 to 110
              minutes, moving through different sleep stages before starting
              over. A full night’s rest consists of multiple cycles, with deep
              sleep occurring more in the first half of the night and REM sleep
              increasing later. <br />
              <br />
              To wake up feeling refreshed, it’s best to wake up at the end of a
              cycle rather than in the middle of deep sleep. Dreamr's sleep
              calculator helps optimize sleep and wake-up times by aligning them
              with complete cycles, reducing grogginess and improving overall
              rest quality.
            </span>
            <CycleTable />

            <Image
              src="/assets/sleepCycle.png"
              className="ml-15"
              alt="Sleep Cycle"
              width={350}
              height={10}
              unoptimized={true}
            />
          </div>
          <div className="pl-25">
            <CalculateForm />
          </div>
        </div>
      </AnimatedPageWrapper>
    </div>
  );
}
