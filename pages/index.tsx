import type { GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getHomeMeta } from "@/common/util/api";
import { Home } from "@/common/pages/home/home";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { ASSET_PATH } from "@/common/constants";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QueryKey.HomeMeta], getHomeMeta);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 5 * 60,
  };
};

const HomePage: NextPage = () => {
  return (
    <Layout>
      <MetaTags
        title=""
        description="Posvoji muco na daljavo."
        isIndexable={true}
        imagePath={ASSET_PATH.PublicImage("logo.png")}
      />
      <Home />
    </Layout>
  );
};

export default HomePage;
