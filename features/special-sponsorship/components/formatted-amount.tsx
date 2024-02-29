import { FC } from "react";
import { SpecialSponsorshipType } from "../types";
import { SPECIAL_SPONSORSHIPS_META } from "../constants";

export const FormattedAmount: FC<{ type: SpecialSponsorshipType }> = ({ type }) => {
  return <strong>{`${SPECIAL_SPONSORSHIPS_META[type].amount} €`}</strong>;
};
