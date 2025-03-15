import Image from "next/image";
import Hero from "@/components/Hero";
import Accordian from "@/components/Accordian";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex justify-center items-center">
        <Accordian />
      </div>
    </div>
  );
}
