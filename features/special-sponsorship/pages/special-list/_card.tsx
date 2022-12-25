import { FC, PropsWithChildren, ReactNode } from "react";
import { Box, Flex, Grid, GridItem, Heading, Icon, Show } from "@chakra-ui/react";
import { ButtonLink } from "@/common/components/button-link";
import { ArrowRight } from "phosphor-react";
import { HeadingMarker } from "@/common/components/heading-marker";

export const SpecialListCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      bgColor="copper.100"
      bgGradient="linear(to-br, copper.200, copper.100)"
      shadow="md"
      py={8}
      px={{ base: 6, lg: 8 }}
      rounded="md"
    >
      {children}
    </Box>
  );
};

export const SpecialListCardHeader: FC<{
  imageUrl: string;
  title: string;
  subtitle: ReactNode;
  benefits: ReactNode;
  formLink?: string;
}> = ({ imageUrl, title, subtitle, benefits, formLink }) => {
  const heading = (
    <>
      <Box height="6px" width="90px">
        <HeadingMarker color="orange" />
      </Box>
      <Heading as="h2" size={{ base: "lg", sm: "xl" }} mt={4}>
        {title}
      </Heading>
    </>
  );

  return (
    <Grid gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
      <GridItem>
        <Show below="lg">{heading}</Show>

        <Box
          bgImage={`url(${imageUrl})`}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="center"
          width="full"
          height={{ base: "200px", lg: "full" }}
          mt={{ base: 6, lg: 0 }}
          shadow="sm"
          rounded="md"
        />
      </GridItem>
      <GridItem colSpan={{ lg: 2 }}>
        <Show above="lg">{heading}</Show>
        <Box mt={{ base: 0, lg: 10 }}>{subtitle}</Box>
        <Box bg="white" px={5} py={4} mt={6} rounded="md" shadow="sm">
          {benefits}
        </Box>
        {formLink && (
          <ButtonLink href={formLink} rightIcon={<Icon as={ArrowRight} weight="bold" />} mt={12}>
            Izberi
          </ButtonLink>
        )}
      </GridItem>
    </Grid>
  );
};

export const SpecialListSubvariantCard: FC<{
  title: string;
  subtitle: ReactNode;
  formLink: string;
}> = ({ title, subtitle, formLink }) => {
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      bgColor="copper.400"
      borderLeft="4px"
      borderColor="orange.500"
      p={6}
      shadow="sm"
      rounded="md"
    >
      <Box>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Box mt={6} maxWidth="580px">
          {subtitle}
        </Box>
      </Box>
      <Box mt="auto" pt={8}>
        <ButtonLink href={formLink} rightIcon={<Icon as={ArrowRight} weight="bold" />}>
          Izberi
        </ButtonLink>
      </Box>
    </Flex>
  );
};
