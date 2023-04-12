import { GetServerSideProps, NextPage } from "next";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getCat } from "@/cats/util/api";
import { CatDetails } from "@/cats/pages/cat-details/cat-details";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { useCurrentCat } from "@/cats/hooks/use-current-cat";
import { getFirstPhotoOrFallback } from "@/cats/util/photos";

export const getServerSideProps: GetServerSideProps<
  { dehydratedState: DehydratedState },
  { slug: string }
> = async (context) => {
  const queryClient = new QueryClient();

  const slug = context.query.slug as string;

  // await queryClient.prefetchQuery([QueryKey.Cat, slug], () => getCat(slug));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const CatDetailsPage: NextPage = () => {
  const { data: cat, isSuccess } = useCurrentCat();

  if (!isSuccess) {
    return null;
  }

  return (
    <Layout>
      <MetaTags
        title={cat.name}
        description={cat.story_short}
        image={{
          isExternal: true,
          path: getFirstPhotoOrFallback(cat),
        }}
      />
      <CatDetails cat={cat} />
    </Layout>
  );
};

export default CatDetailsPage;
