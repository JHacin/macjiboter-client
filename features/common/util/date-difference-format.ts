import { Dayjs } from "dayjs";
import { pluralize } from "./pluralize";

const getDetailedDateDifference = (oldDate: Dayjs, newDate: Dayjs) => {
  const years = newDate.diff(oldDate, "year");
  const months = newDate.diff(oldDate, "month") - years * 12;
  const days = newDate.diff(oldDate.add(years, "year").add(months, "month"), "day");

  return {
    years,
    months,
    days,
  };
};

export const humanReadableDateDifference = (oldDate: Dayjs, newDate: Dayjs) => {
  const { years, months, days } = getDetailedDateDifference(oldDate, newDate);

  const pluralizedYears = pluralize("leto", years);
  const pluralizedMonths = pluralize("mesec", months);
  const pluralizedDays = pluralize("dan", days);

  if (years > 0 && months > 0) {
    return `${years} ${pluralizedYears} in ${months} ${pluralizedMonths}`;
  }

  if (years > 0) {
    return `${years} ${pluralizedYears}`;
  }

  if (months > 0) {
    return `${months} ${pluralizedMonths}`;
  }

  if (days > 0) {
    return `${days} ${pluralizedDays}`;
  }

  return "1 dan";
};
