import { useRef, useEffect, useMemo } from "react";

function useInterval(callback: void, starting: boolean): void {
  const savedCallback: any = useRef();
  const delay: number = 1000;

  console.log(starting, callback);

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick(): void {
      savedCallback.current();
    }
    let interval: any = null;
    if (starting) {
      interval = setInterval(tick, delay);
    } else {
      return () => clearInterval(interval);
    }
  }, [starting]);
}

export default useInterval;
