import type { NextPage } from "next";
import { News } from "@/common/pages/news/news";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";

const NewsPage: NextPage = () => {
  return (
    <Layout variant="filled-header">
      <MetaTags title="Novice" description="Vse o tem, kaj se pri nas trenutno dogaja." />
      <News />
    </Layout>
  );
};

export default NewsPage;
