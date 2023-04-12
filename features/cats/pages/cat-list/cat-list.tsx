import { FC, useState } from "react";
import { CatsGrid, CatsGridSkeleton } from "./_cats-grid";
import { Pagination } from "@/common/components/pagination";
import { SearchInput } from "./_search-input";
import { Section } from "@/common/components/section";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { TextLink } from "@/common/components/text-link";
import { ROUTES } from "@/common/constants";
import { SortControls } from "./_sort-controls";
import { Container } from "@/common/components/container";
import { usePaginatedList } from "@/common/hooks/use-paginated-list";
import { QueryKey } from "@/api/types";
import { getCats } from "../../util/api";
import { Cat } from "../../types";
import { PageTitle } from "@/common/components/page-title";
import { PageSubtitle } from "@/common/components/page-subtitle";
import { PageHeaderOutlined } from "@/common/components/page-header-outlined";
import { X } from "@phosphor-icons/react";

export const CatList: FC = () => {
  const {
    query,
    queryParams,
    setSearch,
    debouncedSetSearch,
    setSort,
    gridWrapperRef,
    handlePaginationButtonClick,
  } = usePaginatedList<Cat>({ queryKey: QueryKey.Cats, queryFn: getCats });
  const [searchInputValue, setSearchInputValue] = useState<string>(queryParams.search ?? "");
  const shouldShowNumResults = !!searchInputValue && !!queryParams.search && !query.isFetching;

  return (
    <>
      <PageHeaderOutlined>
        <PageTitle>redno botrstvo</PageTitle>
        <PageSubtitle>
          Na seznamu so objavljene vse muce, ki trenutno iščejo botra. Preden nadaljujete, si lahko
          najprej preberete več o tem,{" "}
          <TextLink href={ROUTES.WhyBecomeSponsor}>zakaj sploh postati mačji boter</TextLink>.
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
              <SearchInput
                value={searchInputValue}
                setValue={async (search) => {
                  setSearchInputValue(search);
                  await debouncedSetSearch(search);
                }}
              />
            </Box>
            <Box w={{ md: "350px" }}>
              <SortControls onChange={setSort} />
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
                onClick={async () => {
                  await setSearch("");
                  setSearchInputValue("");
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
