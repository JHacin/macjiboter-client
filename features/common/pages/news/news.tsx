import { FC, useCallback, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { GetCatsQueryParams } from "@/cats/util/api";
import { getNews, GetNewsQueryParams } from "../../util/api";
import { NextRouter, useRouter } from "next/router";
import { objectToQueryString } from "../../util/misc";
import { NewsPiece } from "../../types";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Pagination } from "../../components/pagination";
import { Section } from "../../components/section";
import { TextLink } from "../../components/text-link";
import { EXTERNAL_LINKS } from "../../constants";
import { dateFormat } from "../../util/date";
import { Container } from "../../components/container";
import { CmsContent } from "../../components/cms-content";

const getInitialQueryParamsState = (router: NextRouter) => {
  const isString = (string: unknown): string is string => {
    return typeof string === "string";
  };

  return {
    page: isString(router.query.page) ? router.query.page : "1",
  };
};

const NewsPiece: FC<NewsPiece> = ({ title, body, created_at }) => {
  return (
    <Box borderBottom="1px" borderColor="gray.300" py={8}>
      <Text color="gray.500" fontSize="sm">
        {dateFormat(created_at, "default")}
      </Text>
      {title && (
        <Heading size="md" mt={2}>
          {title}
        </Heading>
      )}
      <Box mt={8}>
        <CmsContent content={body} />
      </Box>
    </Box>
  );
};

export const News: FC = () => {
  const router = useRouter();
  const gridWrapperRef = useRef<HTMLDivElement>(null);

  const [queryParams, setQueryParams] = useState<GetNewsQueryParams>(
    getInitialQueryParamsState(router)
  );

  const updateQueryParams = useCallback(
    async (qp: GetCatsQueryParams) => {
      setQueryParams(qp);

      const queryString = objectToQueryString(qp, false);
      await router.replace({ query: queryString }, undefined, { shallow: true });
    },
    [router]
  );

  const { data, isSuccess } = useQuery([QueryKey.News, queryParams], () => getNews(queryParams), {
    keepPreviousData: true,
    staleTime: Infinity,
  });

  const setPage = useCallback(
    (page: number) => {
      updateQueryParams({ ...queryParams, page: String(page) });
    },
    [queryParams, updateQueryParams]
  );

  const handlePaginationButtonClick = (page: number) => {
    setPage(page);
    gridWrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };

  if (!isSuccess) {
    return null;
  }

  return (
    <>
      <Section spacing={{ bottom: "none" }}>
        <Box bgGradient="linear(to-br, purple.50, purple.100, purple.50)" shadow="md">
          <Container paddingVertical={{ base: 12, md: 16, lg: 20, xl: 24 }} position="relative">
            <Heading size={{ base: "2xl", lg: "3xl" }}>Novice</Heading>

            <Text
              fontSize={{ base: "mg", lg: "lg" }}
              mt={{ base: 6, lg: 10 }}
              maxW={{ base: "500px", lg: "640px" }}
            >
              Na tem mestu so zbrane novice glede naših oskrbovancev. Če želite biti v rednem stiku
              z vsem, kar se nam dogaja, nam lahko tudi sledite na družbenih omrežjih{" "}
              <TextLink href={EXTERNAL_LINKS.FacebookPage}>Facebook</TextLink> in{" "}
              <TextLink href={EXTERNAL_LINKS.InstagramPage}>Instagram</TextLink>.
            </Text>
          </Container>
        </Box>
      </Section>

      <Section ref={gridWrapperRef}>
        <Container>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX={12}>
            {data.data.map((newsPiece) => (
              <NewsPiece key={newsPiece.id} {...newsPiece} />
            ))}
          </SimpleGrid>

          {data.total > data.per_page && (
            <Flex justify="center" mt={{ base: 16, lg: 24 }}>
              <Pagination
                selectedPage={Number(queryParams.page)}
                onChange={handlePaginationButtonClick}
                totalPages={data.last_page}
              />
            </Flex>
          )}
        </Container>
      </Section>
    </>
  );
};
