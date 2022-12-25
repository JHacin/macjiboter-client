import type { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getNews } from "@/common/util/api";
import { News } from "@/common/pages/news/news";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  const queryParams = { page: "1" };
  await queryClient.prefetchQuery([QueryKey.News, queryParams], () => getNews(queryParams));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const NewsPage: NextPage = () => {
  return <News />;
};

export default NewsPage;
