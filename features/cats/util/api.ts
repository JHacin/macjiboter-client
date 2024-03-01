import { PaginatedModelApiResponse } from "@/api/types";
import { Cat } from "../types";
import { apiGet } from "@/api/util";
import { objectToQueryString } from "@/common/util/misc";
import { PaginatedListQueryParams, SponsorListViewData } from "@/common/types";

export const getCat = async (slug: string): Promise<Cat> => {
  return await apiGet(`cats/${slug}`);
};

export const getCats = async (
  queryParams: PaginatedListQueryParams
): Promise<PaginatedModelApiResponse<Cat>> => {
  const query = objectToQueryString(queryParams);
  return await apiGet(`cats${query}`);
};

export const getCatSponsors = async (id: number): Promise<SponsorListViewData> => {
  return await apiGet(`cats/${id}/sponsors`);
};
