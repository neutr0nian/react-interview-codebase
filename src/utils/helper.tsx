import { AnyObject } from "./types.d";

export const flatten = (obj: AnyObject, res: AnyObject = {}) => {
  Object.keys(obj).forEach((key: string) => {
    if (typeof obj[key] === "object") {
      flatten(obj[key], res);
    } else {
      res[key] = obj[key];
    }
  });
  return res;
};

export const searchValue = (data: AnyObject[], search: string) => {
  const filteredData = data.filter((row: AnyObject) => {
    return Object.values(row).some((val: string) => {
      return ("" + val).toLowerCase().includes(search.toLowerCase());
    });
  });
  return filteredData;
};

export const debounce = (fn: any, delay = 2000) => {
  let timerCtxt: any;
  return function (...args: any) {
    console.log("searching ->", ...args);
    clearTimeout(timerCtxt);
    // let self = this;
    timerCtxt = setTimeout(() => fn(...args), delay);
  };
};
