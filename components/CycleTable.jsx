import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const stages = [
  {
    stage: "Stage 1",
    sleepType: "NREM",
    name: "N1",
    duration: "5-10 Minutes",
    description:
      "The first stage of sleep, lasting only a few minutes. It is a transition from wakefulness to sleep, where brain activity begins to slow, muscles relax, and occasional muscle twitches may occur.",
  },
  {
    stage: "Stage 2",
    sleepType: "NREM",
    name: "N2",
    duration: "10-25 Minutes",
    description:
      "A more stable sleep stage where heart rate and body temperature drop. Sleep spindles and K-complexes appear in brain activity, playing a role in memory consolidation and preventing sudden awakenings. This stage makes up a large portion of total sleep.",
  },
  {
    stage: "Stage 3",
    sleepType: "NREM",
    name: "N3",
    duration: "20-40 Minutes",
    description:
      "The most restorative sleep stage, also known as slow-wave sleep (SWS). Brain waves slow significantly, and the body focuses on growth, muscle repair, and immune system strengthening. It is difficult to wake up from this stage.",
  },
  {
    stage: "Stage 4",
    sleepType: "REM",
    name: "R",
    duration: "10-60 Minutes",
    description:
      "Characterized by rapid eye movement, increased brain activity, and vivid dreaming. The body experiences temporary muscle paralysis to prevent acting out dreams. This stage is crucial for cognitive function, learning, and emotional regulation.",
  },
];

export function CycleTable() {
  return (
    <div className="flex flex-col gap-5 text-primary text-3xl font-semibold">
      Stages of a Sleep Cycle
      <Table>
        <TableCaption>Hover Over Stages for More Info</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Stage</TableHead>
            <TableHead className="w-[110px]">Sleep Type</TableHead>
            <TableHead className="w-[150px]">Name</TableHead>
            <TableHead className="">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stages.map((stage) => (
            <HoverCard key={stage.stage}>
              <HoverCardTrigger asChild>
                <TableRow key={stage.stage}>
                  <TableCell className="font-medium text-primary">
                    {stage.stage}
                  </TableCell>
                  <TableCell className="text-primary">
                    {stage.sleepType}
                  </TableCell>
                  <TableCell className="text-primary">{stage.name}</TableCell>
                  <TableCell className="text-primary">
                    {stage.duration}
                  </TableCell>
                </TableRow>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 flex flex-col gap-2">
                <div className="text-primary font-semibold text-xl">
                  {stage.stage} ({stage.name}):
                </div>
                <div className="text-primary">{stage.description}</div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="text-primary" colSpan={3}>
              Total:
            </TableCell>
            <TableCell className="text-primary">~90 Minutes</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
