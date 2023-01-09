import { NextPage } from "next";
import { SpecialGroupPageSkeleton } from "@/special-sponsorship/components/special-group-page-skeleton";
import { SpecialSponsorshipGroup } from "@/special-sponsorship/types";

const FipBojevnikiPage: NextPage = () => {
  return <SpecialGroupPageSkeleton group={SpecialSponsorshipGroup.FipBojevniki} />;
};

export default FipBojevnikiPage;
