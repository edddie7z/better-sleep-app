import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Accordian() {
  return (
    <Accordion type="single" collapsible className="w-[95%] text-primary">
      <AccordionItem value="item-1">
        <AccordionTrigger>What does this do?</AccordionTrigger>
        <AccordionContent>
          A calculator to find your perfect sleep and wake times.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is this free to use?</AccordionTrigger>
        <AccordionContent>Yes. Of course it's free.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Have any questions?</AccordionTrigger>
        <AccordionContent>
          Contact us through email at{" "}
          <span className="text-decoration-line: underline hover:text-blue-600">
            customerservice@dreamr.com
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Accordian;
