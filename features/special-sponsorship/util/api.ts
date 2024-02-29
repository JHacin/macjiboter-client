import { SpecialSponsorship, SpecialSponsorshipType } from "../types";
import { apiGet } from "@/api/util";
import { objectToQueryString } from "@/common/util/misc";

export const getRecentSpecialSponsorships = async (
  types: SpecialSponsorshipType[]
): Promise<SpecialSponsorship[]> => {
  const queryString = objectToQueryString({ types });
  return await apiGet(`special-sponsorships/recent${queryString}`);
};
