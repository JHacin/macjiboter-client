import { NextPage } from "next";
import { useRouter } from "next/router";
import { SpecialSponsorshipType } from "@/special-sponsorship/types";
import { SpecialForm } from "@/special-sponsorship/pages/special-form/special-form";
import { Layout } from "@/common/components/layout";

const SpecialSponsorshipsFormPage: NextPage = () => {
  const router = useRouter();

  const typeQueryParam = Number(router.query.tip);

  const defaultType = Object.values(SpecialSponsorshipType).includes(typeQueryParam)
    ? typeQueryParam
    : SpecialSponsorshipType.BoterMeseca;

  return (
    <Layout>
      <SpecialForm defaultType={defaultType} />
    </Layout>
  );
};

export default SpecialSponsorshipsFormPage;
