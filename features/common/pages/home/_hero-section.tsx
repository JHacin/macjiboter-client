import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { ButtonLink } from "../../components/button-link";
import { TextLink } from "../../components/text-link";
import { ASSET_PATH, EXTERNAL_LINKS, ROUTES } from "../../constants";
import { ContainerNew } from "../../components/container";
import { PageTitle } from "../../components/page-title";

export const HeroSection = () => {
  return (
    <Box overflow="hidden" position="relative">
      <ContainerNew>
        <Box
          position="relative"
          pt={{
            base: 20,
            sm: 28,
            md: 32,
            lg: 40,
            xl: 44,
            "2xl": 44,
          }}
          pb={{
            base: "300px",
            sm: "400px",
            md: "300px",
            lg: "410px",
            xl: "220px",
            "2xl": "160px",
          }}
        >
          <Box position="relative">
            <Image
              src={ASSET_PATH.PublicImage("home-hero-blob.svg")}
              alt=""
              pos="absolute"
              top={{ base: "-50px", lg: "-68px" }}
              left={{ base: "-80px", lg: "-120px" }}
              boxSize={{ base: "240px", lg: "380px" }}
            />

            <Box pos="relative">
              <PageTitle>posvoji muco na daljavo.</PageTitle>
              <Text
                fontSize={{ base: "md", sm: "lg", lg: "xl" }}
                mt={12}
                maxW={{ base: "540px", "2xl": "640px" }}
              >
                Mačji boter omogoča posvojitve muck na daljavo ter druge oblike pomoči pri oskrbi
                nekoč brezdomnih muc, ki so našle zavetje v{" "}
                <TextLink href={EXTERNAL_LINKS.MacjaHisa} isExternal={true} fontWeight="semibold">
                  Mačji hiši
                </TextLink>
                .
              </Text>
            </Box>
            <Stack direction={{ base: "column", xl: "row" }} spacing={4} mt={{ base: 12, md: 20 }}>
              <ButtonLink href={ROUTES.BecomeSponsorOverview} size="lg" w="200px">
                Postani boter
              </ButtonLink>
            </Stack>
          </Box>

          <Image
            src={ASSET_PATH.PublicImage("home-hero-image.png")}
            alt=""
            pos="absolute"
            bottom={{ base: "-40px", lg: "-65px" }}
            right={{ base: "0px", sm: "-30px", md: "20px", lg: "30px", xl: "50px", "2xl": "50px" }}
            w={{
              base: "320px",
              sm: "420px",
              md: "460px",
              lg: "580px",
              xl: "600px",
              "2xl": "700px",
            }}
          />
        </Box>
      </ContainerNew>
    </Box>
  );
};
