import ITimeConverter from "./interface";

function timeToString(value: number): string {
  return new Date(value * 1000).toISOString().substr(14, 5);
}

function timeToNumber(value: string): number {
  let time = Math.round(Number(value));
  return time;
}

function timeConterter(value: string | number): ITimeConverter {
  let timeNumber = typeof value === "string" ? 0 : value;
  let timeString = typeof value === "string" ? value : "0";

  return {
    timeNumber,
    timeString
  };
}

export { timeConterter, timeToString, timeToNumber };
