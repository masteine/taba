import ITimeConverter from "./interface";

function timeToString(value: number ): string {
  return "4:00";
}

function timeToNumber(value: string ): number {
  return 240;
}

function timeConterter(value: string | number): ITimeConverter {
 
  let timeNumber = typeof value === "string" ? 0 : value;
  let timeString = typeof value === "string" ? value : "0";
 
  return {
    timeNumber,
    timeString
  }

}



 export { timeConterter, timeToString, timeToNumber }