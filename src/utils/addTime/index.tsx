import IAddTime from "./interface";
import { ISetup } from "../../interface/SetupInterface";

function addTime(setup: ISetup): number {
  const { prepare, work, rest, cycles, rounds, rounds_rest }: any = setup;
  const time: number = (rest + work) * cycles * rounds;
  return time;
}

export { addTime };
