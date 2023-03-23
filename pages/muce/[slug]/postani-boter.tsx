import { GetServerSideProps, NextPage } from "next";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { CatForm } from "@/cat-sponsorship/pages/cat-form/cat-form";
import { QueryKey } from "@/api/types";
import { getCat } from "@/cats/util/api";
import { Layout } from "@/common/components/layout";
import { useCurrentCat } from "@/cats/hooks/use-current-cat";
import { MetaTags } from "@/common/components/meta-tags";
import { getFirstPhotoOrFallback } from "@/cats/util/photos";

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
  const { data: cat, isSuccess } = useCurrentCat();

  if (!isSuccess) {
    return null;
  }

  return (
    <Layout>
      <MetaTags
        title={`${cat.name} - Dogovor o posvojitvi na daljavo`}
        description="Z vašo pomočjo lahko mucam omogočimo varno in zadovoljno življenje."
        isIndexable={false}
        image={{
          isExternal: true,
          path: getFirstPhotoOrFallback(cat),
        }}
      />
      <CatForm cat={cat} />
    </Layout>
  );
};

export default CatSponsorshipFormPage;
