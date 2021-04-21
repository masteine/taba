import { useState, useEffect, useMemo } from "react";

export function useTimedOut(timeOut: number = 0, playing: boolean = false) {
  const [time, setTime] = useState<number>(timeOut);
  const [play, setPlay] = useState<boolean>(playing);

  useMemo(() => {
    if (playing) {
      setPlay(play);
    }
  }, [playing]);

  useEffect(() => {
    let interval: any;

    if (play) {
      interval = setInterval((): any => {
        setTime((time) => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [time, playing]);

  return { time, play };
}
