import { NextPage } from "next";
import { SpecialGroupPageSkeleton } from "@/special-sponsorship/components/special-group-page-skeleton";
import { SpecialSponsorshipGroup } from "@/special-sponsorship/types";

const ZobnaMiskaPage: NextPage = () => {
  return <SpecialGroupPageSkeleton group={SpecialSponsorshipGroup.ZobnaMiska} />;
};

export default ZobnaMiskaPage;
