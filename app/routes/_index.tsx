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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold">Digital Clock</h1>
      <DigitalClock />
    </div>
  );
}
