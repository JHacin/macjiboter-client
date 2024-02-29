import { NextPage } from "next";
import { SpecialList } from "@/special-sponsorship/pages/special-list/special-list";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";

const SpecialSponsorshipsPage: NextPage = () => {
  return (
    <Layout>
      <MetaTags
        title="Posebna botrstva"
        description="Posebna botrstva so enkratne donacije, ki nam jih lahko namenite kadar koli želite."
      />
      <SpecialList />
    </Layout>
  );
};

export default SpecialSponsorshipsPage;
