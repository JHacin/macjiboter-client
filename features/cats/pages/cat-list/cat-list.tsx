import { FC } from "react";
import { CatsGrid, CatsGridSkeleton } from "./_cats-grid";
import { Pagination } from "@/common/components/pagination";
import { SearchInput } from "./_search-input";
import { Section } from "@/common/components/section";
import { Box, Button, Flex, Icon, Skeleton, Text, VStack } from "@chakra-ui/react";
import { TextLink } from "@/common/components/text-link";
import { ROUTES } from "@/common/constants";
import { SortControls } from "./_sort-controls";
import { Container } from "@/common/components/container";
import { usePaginatedList } from "@/common/hooks/use-paginated-list";
import { QueryKey } from "@/api/types";
import { getCats } from "../../util/api";
import { Cat } from "../../types";
import { LargePageTitle } from "@/common/components/page-title";
import { PageSubtitle } from "@/common/components/page-subtitle";
import { PageHeaderOutlined } from "@/common/components/page-header-outlined";
import { X } from "@phosphor-icons/react";

export const CatList: FC = () => {
  const {
    query,
    queryParams,
    searchInputValue,
    setSearch,
    setSort,
    gridWrapperRef,
    handlePaginationButtonClick,
    isReady,
  } = usePaginatedList<Cat>({ queryKey: QueryKey.Cats, queryFn: getCats });

  const shouldShowNumResults = !!searchInputValue && !!queryParams.search && !query.isFetching;

  return (
    <>
      <PageHeaderOutlined>
        <LargePageTitle>redno botrstvo</LargePageTitle>
        <PageSubtitle>
          <VStack spacing={5}>
            <Text>Na seznamu so objavljene vse muce, ki trenutno iščejo botra.</Text>
            <Text>
              To so predvsem tiste, ki iz različnih vzrokov dalj časa čakajo na svoj dom ali pa
              zaradi njihovih posebnosti predvidevamo, da bodo pri nas dalj časa. S pomočjo mačjih
              botrov jim v skrbništvu ves čas bivanja nudimo kvalitetno hrano, veterinarsko oskrbo
              in vse, kar potrebujejo za srečno mačje življenje. Tudi skrb, ljubezen, neprespane
              noči, solze, ko je hudo, in radost, ko gre na bolje.
            </Text>
            <Text>
              Preden nadaljujete, si lahko najprej preberete več o tem,{" "}
              <TextLink href={ROUTES.WhyBecomeSponsor}>zakaj sploh postati mačji boter</TextLink>.
            </Text>
          </VStack>
        </PageSubtitle>
      </PageHeaderOutlined>

      <Section ref={gridWrapperRef}>
        <Container>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 6, md: 16 }}
            justify={{ md: "space-between" }}
          >
            <Box w={{ md: "350px" }}>
              {isReady ? (
                <SearchInput value={searchInputValue} setValue={setSearch} />
              ) : (
                <Skeleton height="40px" />
              )}
            </Box>
            <Box w={{ md: "350px" }}>
              {isReady ? (
                <SortControls onChange={setSort} value={queryParams.sort} />
              ) : (
                <Skeleton height="40px" />
              )}
            </Box>
          </Flex>

          {query.data && shouldShowNumResults && (
            <Box mt={{ base: 6, md: 4 }} mb={6}>
              <Text fontSize={{ base: "md", lg: "lg" }}>
                Število rezultatov:{" "}
                <Text as="span" fontWeight="semibold">
                  {query.data.total}
                </Text>
              </Text>
              <Button
                mt={2}
                rightIcon={<Icon as={X} weight="bold" />}
                onClick={() => {
                  setSearch("");
                }}
              >
                Počisti iskanje
              </Button>
            </Box>
          )}

          <Box mt={{ base: 12, md: 8 }}>
            {query.isSuccess && !query.isFetching && <CatsGrid cats={query.data.data} />}
            {query.isFetching && <CatsGridSkeleton />}
            {query.isError && <Text>Prišlo je do napake na strežniku.</Text>}
          </Box>

          {query.data && query.data.total > query.data.per_page && (
            <Flex justify="center" mt={{ base: 16, lg: 24 }}>
              <Pagination
                selectedPage={Number(queryParams.page)}
                onChange={handlePaginationButtonClick}
                totalPages={query.data.last_page}
              />
            </Flex>
          )}
        </Container>
      </Section>
    </>
  );
};
