export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octber",
  "November",
  "December",
];

interface DatesReturn {
  day: number;
  date: number;
  month: number;
  year: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const dates = (): DatesReturn => {
  const today = new Date();
  return {
    day: today.getDay(),
    date: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
    hours: today.getHours(),
    minutes: today.getMinutes(),
    seconds: today.getSeconds(),
  };
};
