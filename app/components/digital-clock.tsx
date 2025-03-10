import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-orbitron text-9xl text-white shadow-lg">
        <span>{hours}</span>
        <span
          className={time.getSeconds() % 2 === 0 ? "opacity-100" : "opacity-30"}
        >
          :
        </span>
        <span>{minutes}</span>
        <span
          className={time.getSeconds() % 2 === 0 ? "opacity-100" : "opacity-30"}
        >
          :
        </span>
        <span>{seconds}</span>
      </div>
      <p className="mt-4 font-montserrat text-gray-400">
        {time.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
