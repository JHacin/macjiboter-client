import Head from "next/head";
import { FC } from "react";
import { useRouter } from "next/router";
import * as process from "process";

export const MetaTags: FC<{
  title: string;
  description: string;
  isIndexable: boolean;
  imagePath: string;
}> = ({ title, description, isIndexable, imagePath }) => {
  const { pathname } = useRouter();
  const formattedTitle = `${title}${title && " | "}Mačji boter`;
  const pathRoot = process.env.NEXT_PUBLIC_BASE_PATH;
  const fullPath = `${pathRoot}${pathname}`;
  const fullImagePath = `${pathRoot}${imagePath}`;

  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="robots" content={isIndexable ? "index, follow" : "noindex, nofollow"} />
      <link rel="canonical" href={pathRoot} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImagePath} />
      <meta property="og:url" content={fullPath} />
      <meta property="og:site_name" content="Mačji boter" />

      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImagePath} />
      <meta name="twitter:site" content="@MacjaHisa" />
      <meta name="twitter:creator" content="@MacjaHisa" />
    </Head>
  );
};
