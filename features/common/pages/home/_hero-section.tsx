import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { ButtonLink } from "../../components/button-link";
import { TextLink } from "../../components/text-link";
import { ASSET_PATH, EXTERNAL_LINKS, ROUTES } from "../../constants";
import { ContainerNew } from "../../components/container";
import { LargePageTitle } from "../../components/page-title";

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
            md: "350px",
            lg: "460px",
            xl: "230px",
            "2xl": "210px",
          }}
        >
          <Box position="relative" zIndex={1}>
            <Image
              src={ASSET_PATH.PublicImage("home-hero-blob.svg")}
              alt=""
              pos="absolute"
              top={{ base: "-50px", lg: "-68px" }}
              left={{ base: "-80px", lg: "-120px" }}
              boxSize={{ base: "240px", lg: "380px" }}
            />

            <Box pos="relative">
              <LargePageTitle>
                posvoji muco
                <br />
                na daljavo.
              </LargePageTitle>

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
            <Stack direction={{ base: "column", xl: "row" }} spacing={4} mt={{ base: 8, md: 20 }}>
              <ButtonLink href={ROUTES.BecomeSponsorOverview} size="lg" w="200px">
                Postani boter
              </ButtonLink>
            </Stack>
          </Box>

          <Image
            src={ASSET_PATH.PublicImage("home-hero-img.jpg")}
            alt=""
            pos={{ base: "relative", md: "absolute" }}
            bottom={{ md: "25px", lg: "40px", xl: "60px", "2xl": "40px" }}
            right={{ md: "20px", lg: "70px", xl: "-5px", "2xl": "80px" }}
            w={{
              base: "100%",
              md: "460px",
              lg: "560px",
              xl: "660px",
              "2xl": "720px",
            }}
            py={{ base: "30px", md: 0 }}
            zIndex={0}
          />
        </Box>
      </ContainerNew>
    </Box>
  );
};
