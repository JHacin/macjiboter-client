import dayjs, { ConfigType } from "dayjs";

const formatMap = {
  default: "D. M. YYYY",
  monthAndYear: "MMMM YYYY",
};

export const dateFormat = (date: ConfigType, format: keyof typeof formatMap) => {
  return dayjs(date).format(formatMap[format]);
};
