import { PaginatedModelApiResponse } from "@/api/types";
import { Cat } from "../types";
import { apiGet } from "@/api/util";
import { objectToQueryString } from "@/common/util/misc";
import { PaginatedListQueryParams } from "@/common/types";

export const getCat = async (slug: string): Promise<Cat> => {
  return await apiGet(`cats/${slug}`);
};

export const getCats = async (
  queryParams: PaginatedListQueryParams
): Promise<PaginatedModelApiResponse<Cat>> => {
  const query = objectToQueryString(queryParams);
  return await apiGet(`cats${query}`);
};
