import { NextPage } from "next";
import { SpecialGroupPageSkeleton } from "@/special-sponsorship/components/special-group-page-skeleton";
import { SpecialSponsorshipGroup } from "@/special-sponsorship/types";

const BoterMesecaPage: NextPage = () => {
  return <SpecialGroupPageSkeleton group={SpecialSponsorshipGroup.BoterMeseca} />;
};

export default BoterMesecaPage;