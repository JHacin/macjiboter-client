import qs from "qs";

export const objectToQueryString = (obj: Record<string, any>, addQueryPrefix = true) => {
  return qs.stringify(obj, { addQueryPrefix });
};
