import { NextPage } from "next";
import { SpecialGroupPageSkeleton } from "@/special-sponsorship/components/special-group-page-skeleton";
import { SpecialSponsorshipGroup } from "@/special-sponsorship/types";

const NovZacetekPage: NextPage = () => {
  return <SpecialGroupPageSkeleton group={SpecialSponsorshipGroup.NovZacetek} body={<></>} />;
};

export default NovZacetekPage;
