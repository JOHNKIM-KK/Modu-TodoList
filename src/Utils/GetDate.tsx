import { DAYS, MONTHS, dates } from "Utils/Constants/Date";

interface GetDateReturn {
  currentDate: string;
  currentTime: string;
}

export const getDate = (): GetDateReturn => {
  const { day, date, month, year, hours, minutes, seconds } = dates();
  const currentDate = `${DAYS[day]}  ${MONTHS[month]} ${date}, ${year}`;
  const currentTime = `${hours < 10 ? `0${hours}` : hours}: ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;

  return {
    currentTime,
    currentDate,
  };
};

export const today = (): string => {
  const { date, month, year } = dates();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    date < 10 ? `0${date}` : date
  }`;
};
