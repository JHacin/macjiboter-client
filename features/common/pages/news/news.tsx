import { FC } from "react";
import { QueryKey } from "@/api/types";
import { getNews } from "../../util/api";
import { NewsPiece } from "../../types";
import { Box, Flex, Heading, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { Pagination } from "../../components/pagination";
import { Section } from "../../components/section";
import { TextLink } from "../../components/text-link";
import { EXTERNAL_LINKS } from "../../constants";
import { dateFormat } from "../../util/date";
import { ContainerNew } from "../../components/container";
import { CmsContent } from "../../components/cms-content";
import { usePaginatedList } from "../../hooks/use-paginated-list";
import { range } from "lodash-es";
import { LargePageTitle } from "../../components/page-title";
import { PageSubtitle } from "../../components/page-subtitle";
import { PageHeaderFilled } from "../../components/page-header-filled";

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

const SKELETON_INDICES = range(0, 12);

export const News: FC = () => {
  const { query, queryParams, gridWrapperRef, handlePaginationButtonClick } =
    usePaginatedList<NewsPiece>({
      queryKey: QueryKey.News,
      queryFn: getNews,
    });

  return (
    <>
      <PageHeaderFilled>
        <LargePageTitle>novice</LargePageTitle>
        <PageSubtitle>
          Če želite biti v rednem stiku z vsem, kar se pri nas dogaja, vas vabimo, da se nam
          pridružite na družbenih omrežjih{" "}
          <TextLink href={EXTERNAL_LINKS.FacebookPage}>Facebook</TextLink> in{" "}
          <TextLink href={EXTERNAL_LINKS.InstagramPage}>Instagram</TextLink>. Veseli bomo vaših
          všečkov, komentarjev in delitev, ki povečajo prepoznavnost botrskih muc. Morda bo kateremu
          od njih prav vaš všeček (ali srček) prinesel čisto nov dom.
        </PageSubtitle>
      </PageHeaderFilled>

      <Section ref={gridWrapperRef}>
        <ContainerNew indent={1}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX={16}>
            {!query.isError && (
              <>
                {query.isSuccess &&
                  !query.isFetching &&
                  query.data.data.map((newsPiece) => (
                    <NewsPiece key={newsPiece.id} {...newsPiece} />
                  ))}

                {query.isFetching &&
                  SKELETON_INDICES.map((i) => <Skeleton key={i} height="185px" my={6} />)}
              </>
            )}

            {query.isError && <Text>Prišlo je do napake na strežniku.</Text>}
          </SimpleGrid>

          {query.data && query.data.total > query.data.per_page && (
            <Flex justify="center" mt={{ base: 16, lg: 24 }}>
              <Pagination
                selectedPage={Number(queryParams.page)}
                onChange={handlePaginationButtonClick}
                totalPages={query.data.last_page}
              />
            </Flex>
          )}
        </ContainerNew>
      </Section>
    </>
  );
};
