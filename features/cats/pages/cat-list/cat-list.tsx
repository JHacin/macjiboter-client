import { FC, useMemo, useRef, useState } from "react";
import { CatsGrid } from "./_cats-grid";
import { Pagination } from "@/common/components/pagination";
import { SearchInput } from "./_search-input";
import { Section } from "@/common/components/section";
import { Box, Button, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { TextLink } from "@/common/components/text-link";
import { PawPrint } from "phosphor-react";
import { ROUTES } from "@/common/constants";
import { SortControls } from "./_sort-controls";
import { debounce } from "lodash-es";
import { useCatListQuery } from "./_use-cat-list-query";
import { Container } from "@/common/components/container";

export const CatList: FC = () => {
  const { result, queryParams, setPage, setSearch, setSort } = useCatListQuery();
  const debouncedSetSearchQueryParam = useMemo(() => debounce(setSearch, 400), [setSearch]);
  const [searchInputValue, setSearchInputValue] = useState<string>(queryParams.search ?? "");
  const gridWrapperRef = useRef<HTMLDivElement>(null);

  const shouldShowNumResults = !!searchInputValue && !!queryParams.search && !result.isFetching;

  const handlePaginationButtonClick = (page: number) => {
    setPage(page);
    gridWrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };

  if (!result.isSuccess) {
    return null;
  }

  return (
    <>
      <Section spacing={{ bottom: "none" }}>
        <Box
          bgGradient="linear(to-br, copper.200, copper.100, copper.200)"
          shadow="md"
          overflow="hidden"
        >
          <Container py={{ base: 12, md: 16, lg: 20, xl: 24 }} position="relative">
            <Icon
              as={PawPrint}
              color="copper.300"
              opacity={{ base: 0.4, md: 1 }}
              boxSize={{
                base: "360px",
                sm: "300px",
                md: "320px",
                lg: "360px",
                xl: "420px",
                "2xl": "460px",
              }}
              weight="light"
              position="absolute"
              bottom="0px"
              right="0px"
              transform="auto"
              rotate="-25deg"
              translateY="30%"
              translateX={{ base: "20%", xl: "-25%", "2xl": "-40%" }}
            />

            <Box position="relative">
              <Heading size={{ base: "2xl", lg: "3xl" }}>Muce, ki iščejo botra</Heading>

              <Text
                fontSize={{ base: "mg", lg: "lg" }}
                mt={{ base: 6, lg: 10 }}
                maxW={{ base: "500px", lg: "640px" }}
              >
                Na seznamu so objavljene vse muce, ki trenutno iščejo botra. Preden nadaljujete, si
                lahko najprej preberete več o tem,{" "}
                <TextLink href={ROUTES.WhyBecomeSponsor}>zakaj sploh postati mačji boter</TextLink>.
              </Text>
            </Box>
          </Container>
        </Box>
      </Section>

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
                setValue={(search) => {
                  setSearchInputValue(search);
                  debouncedSetSearchQueryParam(search);
                }}
              />
            </Box>
            <Box w={{ md: "350px" }}>
              <SortControls onChange={setSort} />{" "}
            </Box>
          </Flex>

          <VStack mt={{ base: 8, lg: 12 }} spacing={6}>
            <Box
              visibility={shouldShowNumResults ? "visible" : "hidden"}
              aria-hidden={!shouldShowNumResults}
            >
              <Text fontSize={{ base: "md", lg: "lg" }}>
                Število rezultatov:{" "}
                <Text as="span" fontWeight="semibold">
                  {result.data.total}
                </Text>
              </Text>
              <Button
                variant="link"
                onClick={() => {
                  setSearch("");
                }}
              >
                Počisti iskanje
              </Button>
            </Box>

            <CatsGrid cats={result.data.data} />
          </VStack>

          {result.data.total > result.data.per_page && (
            <Flex justify="center" mt={{ base: 16, lg: 24 }}>
              <Pagination
                selectedPage={Number(queryParams.page)}
                onChange={handlePaginationButtonClick}
                totalPages={result.data.last_page}
              />
            </Flex>
          )}
        </Container>
      </Section>
    </>
  );
};
