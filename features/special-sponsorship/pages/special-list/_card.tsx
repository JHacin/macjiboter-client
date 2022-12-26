import { FC, PropsWithChildren, ReactNode } from "react";
import { Box, Flex, Grid, GridItem, Heading, Icon, Show } from "@chakra-ui/react";
import { ButtonLink } from "@/common/components/button-link";
import { ArrowRight } from "phosphor-react";
import { HeadingMarker } from "@/common/components/heading-marker";

type CardColor = "copper" | "purple" | "blue" | "orange";

export const SpecialListCard: FC<PropsWithChildren<{ color: CardColor }>> = ({
  color,
  children,
}) => {
  return (
    <Box bgColor={`${color}.100`} py={10} px={{ base: 6, lg: 8 }} shadow="md" rounded="md">
      {children}
    </Box>
  );
};

export const SpecialListCardHeader: FC<{
  imageUrl: string;
  title: string;
  subtitle: ReactNode;
  benefits: ReactNode;
  color: CardColor;
  formLink?: string;
}> = ({ imageUrl, title, subtitle, benefits, color, formLink }) => {
  const heading = (
    <>
      <Box height="6px" width="90px">
        <HeadingMarker color={color} />
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
        <Box bg="whiteAlpha.700" px={5} py={4} mt={6} shadow="sm">
          {benefits}
        </Box>
        {formLink && (
          <ButtonLink
            href={formLink}
            rightIcon={<Icon as={ArrowRight} weight="bold" />}
            mt={12}
            colorScheme={color}
          >
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
  color: CardColor;
}> = ({ title, subtitle, formLink, color }) => {
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      bgColor="white"
      borderTop="4px"
      borderColor={`${color}.600`}
      p={6}
    >
      <Box>
        <Heading as="h3" size="md" color={`${color}.700`}>
          {title}
        </Heading>
        <Box mt={6} maxWidth="580px">
          {subtitle}
        </Box>
      </Box>
      <Box mt="auto" pt={8}>
        <ButtonLink
          href={formLink}
          rightIcon={<Icon as={ArrowRight} weight="bold" />}
          colorScheme={color}
        >
          Izberi
        </ButtonLink>
      </Box>
    </Flex>
  );
};
