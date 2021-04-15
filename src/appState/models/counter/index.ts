import { createModel } from "@rematch/core";
import { RootModel } from "../index";
import { addTime } from "../../../utils/addTime";
import { ISetup, SetupProps } from "../../../interface/SetupInterface";

type IState = {
  setup: ISetup;
  time: number;
  start: boolean;
};

export const counter = createModel<RootModel>()({
  state: {
    setup: {
      prepare: 10,
      work: 20,
      rest: 10,
      cycles: 8,
      rounds: 1,
      rounds_rest: 20
    },
    time: 240,
    start: false
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
    }
  }
});
