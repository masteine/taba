import { createModel } from "@rematch/core";
import { RootModel } from "../index";
import { addTime } from "../../../utils/addTime";
import { ISetup, SetupProps } from "../../../interface/SetupInterface";

type IState = {
  setup: ISetup;
  time: number;
  start: boolean;
  startingSetup: ISetup;
};

export const counter = createModel<RootModel>()({
  state: {
    setup: {
      prepare: 2,
      work: 3,
      rest: 4,
      cycles: 3,
      rounds: 1,
      rounds_rest: 10
    },
    startingSetup: {
      prepare: 2,
      work: 3,
      rest: 4,
      cycles: 3,
      rounds: 1,
      rounds_rest: 10
    },
    time: 240,
    start: false,
    pause: false
  } as IState,
  reducers: {
    toggleWorkoutStatus(state: IState, payload: boolean): IState {
      return { ...state, start: payload };
    },
    updateSetup(
      state: IState,
      { value, label }: { value: string; label: string }
    ): IState {
      let newValue: string = value;

      if (!/^\d+$/.test(value) && value.length > 0) return { ...state };
      if (value.length === 0) newValue = "0";
      let newSetup: ISetup = state.setup;
      newSetup[label as SetupProps] = Number(newValue);

      const newTime = addTime(newSetup);

      return { ...state, setup: newSetup, time: newTime };
    },
    saveStartingSetup(state: IState, payload: ISetup): IState {
      return { ...state, startingSetup: payload };
    },
    resetCurrentSetup(state: IState): IState {
      const startingSetup: ISetup = state.startingSetup;
      return { ...state, setup: startingSetup, time: addTime(startingSetup) };
    },
    countDown(
      state: IState,
      { value, label, time }: { value: number; label: string; time: number }
    ): IState {
      return { ...state, setup: { ...state.setup, [label]: value }, time };
    },
    stopTimer(state: IState): IState {
      return { ...state, start: false };
    }
  },
  effects: (dispatch) => {
    const { counter }: any = dispatch;
    return {
      async startTimer(payload: boolean, rootState) {
        const { time, setup, start } = rootState.counter;
        const { prepare, work, rest, cycles } = setup;

        await counter.saveStartingSetup(setup);

        if (prepare === 0) counter.toggleWorkoutStatus(payload);

        let currentTime = prepare > 0 ? prepare : work;
        let summaryTime = time;

        let timer = setInterval(() => {
          currentTime = currentTime - 1;
          summaryTime = summaryTime - 1;

          counter.countDown({
            value: currentTime,
            time: summaryTime,
            label: "work"
          });

          if (!start) {
            clearInterval(timer);
            return counter.resetCurrentSetup();
          }

          if (currentTime === 0) {
            clearInterval(timer);
          }
        }, 1000);
      }
    };
  }
});
