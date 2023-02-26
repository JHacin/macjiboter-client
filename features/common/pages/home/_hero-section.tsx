import { Section } from "../../components/section";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ButtonLink } from "../../components/button-link";
import { TextLink } from "../../components/text-link";
import { EXTERNAL_LINKS, ROUTES } from "../../constants";
import { Container } from "../../components/container";

export const HeroSection = () => {
  return (
    <Box overflow="hidden" position="relative">
      <Container
        position="relative"
        paddingBottom={{
          base: "225px",
          sm: "320px",
          md: "120px",
          lg: "140px",
          xl: "70px",
          "2xl": "70px",
        }}
      >
        <Section
          pb={{ base: 48, sm: 28, md: 36, lg: 48 }}
          pt={{ base: 20, sm: 28, md: 32, lg: 40, xl: 44, "2xl": 44 }}
        >
          <Box position="relative">
            <Image
              src="/img/home-hero-blob.svg"
              alt=""
              pos="absolute"
              top={{ base: "-50px", lg: "-68px" }}
              left={{ base: "-80px", lg: "-120px" }}
              boxSize={{ base: "240px", lg: "380px" }}
            />

            <Box pos="relative">
              <Heading
                as="h1"
                size={{ base: "3xl", lg: "4xl" }}
                lineHeight={{ base: 1, sm: 1.1, lg: 1.1 }}
                maxW="600px"
              >
                Posvoji muco na daljavo.
              </Heading>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                mt={16}
                maxW={{ base: "540px", "2xl": "640px" }}
              >
                Mačji boter je projekt{" "}
                <TextLink href={EXTERNAL_LINKS.MacjaHisa} isExternal={true} fontWeight="semibold">
                  Mačje hiše
                </TextLink>
                , ki omogoča posvojitve muck na daljavo in druge oblike pomoči pri oskrbi muckov, ki
                so v naši oskrbi že dalj časa.
              </Text>
            </Box>
            <Stack direction={{ base: "column", xl: "row" }} spacing={4} mt={20}>
              <ButtonLink href={ROUTES.BecomeSponsorOverview} size="lg" w="200px">
                Postani boter
              </ButtonLink>
            </Stack>
          </Box>
        </Section>

        <Image
          src="/img/home-hero-image.png"
          alt=""
          pos="absolute"
          bottom={{ base: "-40px", lg: "-65px" }}
          right={{ base: "0px", sm: "-30px", md: "20px", lg: "30px", xl: "50px", "2xl": "50px" }}
          w={{ base: "320px", sm: "420px", md: "460px", lg: "580px", xl: "600px", "2xl": "700px" }}
        />
      </Container>
    </Box>
  );
};
