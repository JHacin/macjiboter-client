import { GetStaticPaths, type GetStaticProps } from "next";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getCat, getCats } from "@/cats/util/api";
import { CatDetails } from "@/cats/pages/cat-details/cat-details";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { useCurrentCat } from "@/cats/hooks/use-current-cat";
import { getFirstPhotoOrFallback } from "@/cats/util/photos";

type Params = { slug: string };

export default function CatDetailsPage() {
  const { data: cat, isSuccess } = useCurrentCat();

  if (!isSuccess) {
    return null;
  }

  return (
    <Layout>
      <MetaTags
        title={cat.name}
        description="Posvoji muco na daljavo."
        image={{
          isExternal: true,
          path: getFirstPhotoOrFallback(cat),
        }}
      />
      <CatDetails cat={cat} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{ dehydratedState: DehydratedState }, Params> = async ({
  params,
}) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const queryClient = new QueryClient();

  try {
    await queryClient.fetchQuery([QueryKey.Cat, params.slug], () => getCat(params.slug), {
      staleTime: 5 * 60 * 1000,
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const meta = await getCats({ page: "1" });
  const allCats = await getCats({ page: "1", per_page: String(meta.total) });
  const paths = allCats.data.map((cat) => ({ params: { slug: cat.slug } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};
