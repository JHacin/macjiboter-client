import type { GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getHomeMeta } from "@/common/util/api";
import { Home } from "@/common/pages/home/home";

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
  return <Home />;
};

export default HomePage;
