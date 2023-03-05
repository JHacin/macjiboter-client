import { NextPage } from "next";
import { CatList } from "@/cats/pages/cat-list/cat-list";
import { Layout } from "@/common/components/layout";

const CatListPage: NextPage = () => {
  return (
    <Layout>
      <CatList />
    </Layout>
  );
};

export default CatListPage;
