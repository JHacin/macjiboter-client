import { GetServerSideProps, NextPage } from "next";
import { CatList } from "@/cats/pages/cat-list/cat-list";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getCats } from "@/cats/util/api";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  const queryParams = { page: "1" };
  await queryClient.prefetchQuery([QueryKey.Cats, queryParams], () => getCats(queryParams));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const CatListPage: NextPage = () => {
  return <CatList />;
};

export default CatListPage;
