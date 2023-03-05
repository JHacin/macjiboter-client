import type { NextPage } from "next";
import { News } from "@/common/pages/news/news";
import { Layout } from "@/common/components/layout";

const NewsPage: NextPage = () => {
  return (
    <Layout variant="filled-header">
      <News />
    </Layout>
  );
};

export default NewsPage;
