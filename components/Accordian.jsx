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
        <AccordionTrigger>What is Dreamr?</AccordionTrigger>
        <AccordionContent>
          Dream is a tool to help improve your sleep. You can keep track of your
          sleep with notes and use our calculator to find your scientifically
          perfect sleep and wake times.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is Dreamr free to use?</AccordionTrigger>
        <AccordionContent>Yes. Of course it's free!</AccordionContent>
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
