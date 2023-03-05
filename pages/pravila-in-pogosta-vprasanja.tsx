import type { NextPage } from "next";
import { FAQ } from "@/common/pages/faq/faq";
import { Layout } from "@/common/components/layout";

const FAQPage: NextPage = () => {
  return (
    <Layout>
      <FAQ />
    </Layout>
  );
};

export default FAQPage;
