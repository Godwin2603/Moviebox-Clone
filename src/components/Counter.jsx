import { useEffect, useState } from "react";

function Countdown({ start }) {
  const [time, setTime] = useState(start); 

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  // Convert seconds → H:M:S
  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <span>
      {hours}:{minutes}:{seconds}
    </span>
  );
}

export default Countdown;
