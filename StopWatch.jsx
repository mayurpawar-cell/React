import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-4xl font-bold mb-4">{time} s</div>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setIsRunning(false)}
        >
          Stop
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
