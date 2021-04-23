import { useState, useEffect, useMemo } from "react";
import { ISetup, SetupProps } from "../../interface/SetupInterface";

import useInterval from "../useInterval";

interface ITimer {
  toCyclesEnd: number;
  currentSetup: ISetup;
  allTime: number;
}

interface IMode {
  mode: string;
  toCyclesEnd: number;
}

const useTimeCounter = (
  time: number = 0,
  setup: ISetup,
  starting: boolean = false,
  startingSetup: ISetup
): ITimer => {
  const [currentSetup, setCurrentSetup] = useState(setup);
  const startMode: IMode =
    currentSetup.prepare > 0
      ? { toCyclesEnd: currentSetup.prepare, mode: "prepare" }
      : { toCyclesEnd: currentSetup.work, mode: "work" };

  const [mode, setMode] = useState(startMode.mode);
  const [allTime, setAllTime] = useState(time);
  const [toCyclesEnd, setToCyclesEnd] = useState(startMode.toCyclesEnd);
  const [nextRound, setNextRound] = useState<boolean>(true);

  // const { timeToEnd } = useTimedOut(10, starting);

  useEffect(() => {
    const {
      work,
      cycles,
      rest,
      rounds,
      prepare,
      rounds_rest
    }: ISetup = currentSetup;
    if (allTime === 0) return setNextRound(false);
  }, [allTime, nextRound, currentSetup]);

  useInterval(() => {
    if (toCyclesEnd > 0 && starting) {
      setToCyclesEnd((toCyclesEnd) => toCyclesEnd - 1);
    }
  }, starting);

  return {
    allTime,
    currentSetup,
    toCyclesEnd
  };
};

export default useTimeCounter;
