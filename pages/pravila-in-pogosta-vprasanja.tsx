import type { NextPage } from "next";
import { FAQ } from "@/common/pages/faq/faq";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";

const FAQPage: NextPage = () => {
  return (
    <Layout variant="filled-header">
      <MetaTags
        title="Pogosta vprašanja"
        description="Odgovori na pogosta vprašanja v povezavi s programom mačjega botrstva."
      />
      <FAQ />
    </Layout>
  );
};

export default FAQPage;
