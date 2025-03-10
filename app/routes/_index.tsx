import { MetaFunction } from "@remix-run/react";
import DigitalClock from "~/components/digital-clock";

export const meta: MetaFunction = () => {
  return [
    { title: "Digital Clock" },
    { name: "description", content: "A simple digital clock built with Remix" },
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <DigitalClock />
    </div>
  );
}
