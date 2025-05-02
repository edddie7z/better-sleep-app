import React from "react";
import TrackerForm from "@/components/TrackerForm";
import AnimatedPageWrapper from "@/components/AnimatedPageWrapper";

export default function Tracker() {
  return (
    <div>
      <AnimatedPageWrapper>
        <div className="flex justify-center my-15">
          <TrackerForm />
        </div>
      </AnimatedPageWrapper>
    </div>
  );
}
