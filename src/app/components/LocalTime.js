import { useEffect, useState } from "react";

const LocalTime = ({ timezone }) => {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true only on the client
    setMounted(true);

    const updateTime = () => {
      const localTime = new Intl.DateTimeFormat("it-IT", {
        timeZone: timezone,
        hour: "numeric",
        minute: "numeric",
      }).format(new Date());

      setTime(localTime);
    };

    if (mounted) {
      updateTime(); // Initialize time immediately
      const interval = setInterval(updateTime, 1000); // Update every second
      return () => clearInterval(interval); // Clean up on unmount
    }
  }, [timezone, mounted]);

  if (!mounted) return null; // Don't render on the server

  return (
    <>
      <p id="time">{time}[IT]</p>
    </>
  );
};

export default LocalTime;
