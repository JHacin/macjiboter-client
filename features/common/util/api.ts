import { NewsPiece, PaginatedListQueryParams, PersonData } from "../types";
import { Cat } from "@/cats/types";
import { apiGet } from "@/api/util";
import { objectToQueryString } from "./misc";
import { PaginatedModelApiResponse } from "@/api/types";

export const getHomeMeta = async (): Promise<{
  heroCats: Cat[];
}> => {
  return await apiGet("meta/home");
};

export const getPersonData = async (id: number): Promise<PersonData> => {
  return await apiGet(`person-data/${id}`);
};

export const getNews = async (
  queryParams: PaginatedListQueryParams
): Promise<PaginatedModelApiResponse<NewsPiece>> => {
  const query = objectToQueryString(queryParams);
  return await apiGet(`news${query}`);
};
