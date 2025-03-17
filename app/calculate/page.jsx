import React from "react";
import CalculateForm from "@/components/CalculateForm";
import { CycleTable } from "../../components/CycleTable";
import Image from "next/image";

export default function Calculate() {
  return (
    <div>
      <div className="flex justify-center my-15">
        <div className="flex flex-col gap-15">
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
    </div>
  );
}
