import { GetServerSideProps, NextPage } from "next";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getCat } from "@/cats/util/api";
import { CatDetails } from "@/cats/pages/cat-details/cat-details";
import { Layout } from "@/common/components/layout";

export const getServerSideProps: GetServerSideProps<
  { dehydratedState: DehydratedState },
  { slug: string }
> = async (context) => {
  const queryClient = new QueryClient();

  const slug = context.query.slug as string;

  await queryClient.prefetchQuery([QueryKey.Cat, slug], () => getCat(slug));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const CatDetailsPage: NextPage = () => {
  return (
    <Layout>
      <CatDetails />
    </Layout>
  );
};

export default CatDetailsPage;
