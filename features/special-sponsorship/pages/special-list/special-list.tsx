import { FC } from "react";
import { Section } from "@/common/components/section";
import { Container } from "@/common/components/container";
import {
  Box,
  Flex,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import { ArrowRight, Sparkle } from "phosphor-react";
import { SPECIAL_SPONSORSHIP_GROUP_META, SPECIAL_SPONSORSHIPS_META } from "../../constants";
import { SpecialSponsorshipGroup } from "../../types";
import { max, min } from "lodash-es";
import { NextLink } from "@/common/components/next-link";
import { ButtonLink } from "@/common/components/button-link";
import { ROUTES } from "@/common/constants";

interface SpecialSponsorshipListItemProps {
  group: SpecialSponsorshipGroup;
  amountRange: string;
}

const generateAmountRange = (group: SpecialSponsorshipGroup) => {
  const amounts = Object.values(SPECIAL_SPONSORSHIPS_META)
    .filter((meta) => meta.parent === group)
    .map((meta) => meta.amount);

  if (!amounts.length) {
    return "";
  }

  if (amounts.length === 1) {
    return `${amounts[0]} €`;
  }

  const smallest = min(amounts);
  const largest = max(amounts);

  if (smallest === largest) {
    return `${smallest} €`;
  }

  return `${smallest}-${largest} €`;
};

const LIST_ITEMS: SpecialSponsorshipListItemProps[] = Object.keys(SPECIAL_SPONSORSHIP_GROUP_META)
  .map((group) => Number(group))
  .map((group: SpecialSponsorshipGroup) => ({
    group,
    amountRange: generateAmountRange(group),
  }));

const SpecialSponsorshipTypeCard: FC<SpecialSponsorshipListItemProps> = ({
  group,
  amountRange,
}) => {
  const { imageUrls, name, description } = SPECIAL_SPONSORSHIP_GROUP_META[group];
  const href = ROUTES.SpecialSponsorshipGroup(group);

  return (
    <LinkBox as={Flex} flexDirection="column" bg="white" shadow="lg" rounded="md">
      <Image src={imageUrls.sm} alt={name} position="relative" roundedTop="inherit" />
      <Flex flexGrow={1} flexDirection="column" alignItems="flex-start" p={6}>
        <LinkOverlay as={NextLink} href={href}>
          <Text as="h3" fontSize={{ base: "xl", sm: "2xl" }} fontWeight="bold">
            {name}
          </Text>
        </LinkOverlay>
        <Text color="gray.500" fontSize="sm">
          {amountRange}
        </Text>
        <Text mt={4}>{description}</Text>
        <Box mt="auto" pt={8}>
          <ButtonLink href={href} rightIcon={<Icon as={ArrowRight} weight="bold" />}>
            Izberi
          </ButtonLink>
        </Box>
      </Flex>
    </LinkBox>
  );
};

export const SpecialList: FC = () => {
  return (
    <>
      <Section spacing={{ bottom: "none" }}>
        <Box
          bg="copper.100"
          bgGradient="linear(to-bl, copper.200, copper.100, copper.100)"
          overflow="hidden"
        >
          <Container paddingVertical={{ base: 12, md: 16, lg: 20, xl: 24 }} position="relative">
            <Icon
              as={Sparkle}
              color="copper.300"
              opacity={{ base: 0.4, md: 1 }}
              boxSize={{
                base: "250px",
                sm: "280px",
                md: "320px",
                lg: "390px",
                xl: "460px",
                "2xl": "470px",
              }}
              weight="light"
              position="absolute"
              bottom="20px"
              right="0px"
              transform="auto"
              rotate="250deg"
              translateY="30%"
              translateX={{
                base: "10%",
                sm: "20%",
                md: "10%",
                lg: "20%",
                xl: "-15%",
                "2xl": "-40%",
              }}
            />
            <Box position="relative">
              <Heading size={{ base: "2xl", lg: "3xl" }}>Posebna botrstva</Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                mt={{ base: 6, lg: 10 }}
                maxW={{ base: "500px", lg: "620px" }}
              >
                Posebna botrstva so{" "}
                <Text as="span" fontWeight="semibold">
                  enkratne donacije
                </Text>
                , ki nam jih lahko namenite kadar koli želite. Pri tem vam ponujamo več možnosti, ki
                so navedene na spodnjem seznamu.
              </Text>
            </Box>
          </Container>
        </Box>
      </Section>
      <Section>
        <Container>
          <SimpleGrid
            columns={{ base: 1, md: 2, xl: 3 }}
            spacingX={10}
            spacingY={{ base: 10, xl: 14 }}
          >
            {LIST_ITEMS.map((type) => (
              <SpecialSponsorshipTypeCard key={type.group} {...type} />
            ))}
          </SimpleGrid>
        </Container>
      </Section>
    </>
  );
};
