import { GetServerSideProps, NextPage } from "next";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { CatForm } from "@/cat-sponsorship/pages/cat-form/cat-form";
import { QueryKey } from "@/api/types";
import { getCat } from "@/cats/util/api";
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

const CatSponsorshipFormPage: NextPage = () => {
  return (
    <Layout>
      <CatForm />
    </Layout>
  );
};

export default CatSponsorshipFormPage;
