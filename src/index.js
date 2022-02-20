import { useRef, useState, useLayoutEffect } from "react";

export const useInLoopCounter = (cb) => {
  const counter = useRef(0);
  const [stop, setStop] = useState(false);
  const [start, setStart] = useState(true);

  const handleReset = () => {
    setStop(false);
    setStart(true);
  };

  const handleStart = () => {
    setStart(!start);
  };

  const handleStop = () => {
    setStop(true);
  };

  useLayoutEffect(() => {
    let timerId;
    if (!start) {
      const cbMethods = {
        setStart: handleStart,
        setStop: handleStop,
      };

      const animate = () => {
        counter.current = counter.current + 1;
        cb({
          counter: counter.current,
          ...cbMethods,
        });
        timerId = requestAnimationFrame(animate);
      };

      if (stop) {
        cancelAnimationFrame(timerId);
        counter.current = 0;
        cb({
          counter: 0,
          ...cbMethods,
        });
        handleReset();
        return;
      }
      timerId = requestAnimationFrame(animate);
    }
    return () => !stop && cancelAnimationFrame(timerId);
  }, [start, stop]);

  return [start, handleStart, handleStop];
};
