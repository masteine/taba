export type SetupProps = 
  "prepare" |
  "work" |
  "rest" |
  "cycles" |
  "rounds" |
  "rounds_rest"

export interface ISetup {
  prepare: number;
  work: number;
  rest: number;
  cycles: number;
  rounds: number;
  rounds_rest: number;
}
