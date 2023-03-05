import { NextPage } from "next";
import { SpecialList } from "@/special-sponsorship/pages/special-list/special-list";
import { Layout } from "@/common/components/layout";

const SpecialSponsorshipsPage: NextPage = () => {
  return (
    <Layout>
      <SpecialList />
    </Layout>
  );
};

export default SpecialSponsorshipsPage;
