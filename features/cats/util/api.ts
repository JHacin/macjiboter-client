import { PaginatedModelApiResponse } from "@/api/types";
import { Cat } from "../types";
import { apiGet } from "@/api/util";
import { objectToQueryString } from "@/common/util/misc";

export const getCat = async (slug: string): Promise<Cat> => {
  return await apiGet(`cats/${slug}`);
};

export const GET_CATS_SORT_VARIANTS = [
  "id_asc",
  "id_desc",
  "age_asc",
  "age_desc",
  "sponsors_asc",
  "sponsors_desc",
] as const;

export type GetCatsSortVariant = typeof GET_CATS_SORT_VARIANTS[number];

export interface GetCatsQueryParams {
  page: string;
  search?: string;
  sort?: GetCatsSortVariant;
}

export const getCats = async (
  queryParams: GetCatsQueryParams
): Promise<PaginatedModelApiResponse<Cat>> => {
  const query = objectToQueryString(queryParams);
  return await apiGet(`cats${query}`);
};
