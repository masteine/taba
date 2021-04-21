import { useState, useEffect, useMemo } from "react";
import { ISetup, SetupProps } from "../../interface/SetupInterface";
import { useTimedOut } from "../useTimedOut";
interface ITimer {
  timeToEnd: number;
  currentSetup: ISetup;
  cyclesTime: number;
}

interface IMode {
  mode: string;
  time: number;
}

const useTimeCounter = (
  time: number,
  setup: ISetup,
  starting: boolean,
  startingSetup: ISetup
): ITimer => {
  const [timeToEnd, setTimeToEnd] = useState(time);
  const [currentSetup, setCurrentSetup] = useState(setup);
  const startMode: IMode =
    currentSetup.prepare > 0
      ? { time: currentSetup.prepare, mode: "prepare" }
      : { time: currentSetup.work, mode: "work" };

  const [mode, setMode] = useState(startMode.mode);
  const [cyclesTime, setCyclesTime] = useState(startMode.time);

  const t = useTimedOut(10, starting);
  // prepare => (work => rest) * cycles * rounds > 1
  useEffect((): any => {
    if (!starting) return false;

    let { prepare, work, rest, cycles, rounds, rounds_rest } = currentSetup;

    // let interval = setInterval((): any => {
    //   if (mode !== "prepare") {
    //     setTimeToEnd((time) => time - 1);
    //   }
    //   // const nextSetup = {currentSetup[mode]: currentSetup[mode] - 1};

    //   // setCurrentSetup({ ...currentSetup, nextSetup }
    //   //   );

    //   setCyclesTime((seconds) => seconds - 1);
    // }, 1000);

    // if (cyclesTime === 0 || !starting) {
    //   if (cycles > 0) {
    //     let nextMode = { mode: "", time: 0 };

    //     if (mode === "prepare") {
    //       setCurrentSetup({ ...currentSetup, prepare: 0 });
    //       nextMode = { mode: "work", time: work };
    //     }
    //     if (mode === "rest") {
    //       setCurrentSetup((s) => ({
    //         ...s,
    //         cycles: s.cycles - 1,
    //         work: startingSetup.work
    //       }));
    //       nextMode = { mode: "work", time: work };
    //     }

    //     if (mode === "work") {
    //       nextMode = { mode: "rest", time: rest };
    //     }

    //     clearInterval(interval);
    //     setMode(nextMode.mode);
    //     setCyclesTime(nextMode.time);
    //     return clearInterval(interval);
    //   }
    //   clearInterval(interval);
    //   return clearInterval(interval);
    // }

    // return () => clearInterval(interval);
  }, [starting, cyclesTime, currentSetup, time, mode]);

  // console.log(currentSetup, cyclesTime, timeToEnd, mode);

  return {
    timeToEnd,
    currentSetup,
    cyclesTime
  };
};

export default useTimeCounter;
