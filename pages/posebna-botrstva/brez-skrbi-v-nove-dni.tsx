import { NextPage } from "next";
import { SpecialGroupPageSkeleton } from "@/special-sponsorship/components/special-group-page-skeleton";
import { SpecialSponsorshipGroup } from "@/special-sponsorship/types";

const BrezSkrbiVNoveDniPage: NextPage = () => {
  return <SpecialGroupPageSkeleton group={SpecialSponsorshipGroup.BrezSkrbiVNoveDni} />;
};

export default BrezSkrbiVNoveDniPage;
