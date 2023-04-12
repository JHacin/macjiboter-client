import { NextPage } from "next";
import { Container } from "@/common/components/container";
import { Box, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { ROUTES } from "@/common/constants";
import { ArrowRight } from "@phosphor-icons/react";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { ButtonLink } from "@/common/components/button-link";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";

const BecomeSponsorOverviewPage: NextPage = () => {
  const { breakpoints } = useTheme();

  return (
    <Layout>
      <MetaTags title="Postani boter" description="Vse o tem, kako deluje program Mačji boter." />
      <Container>
        <Box maxWidth={breakpoints.xl} mx="auto">
          <Section spacing={{ bottom: "none" }}>
            <Heading size="3xl" bgColor="copper.200" display="inline-block" px={6} py={5}>
              Postani boter
            </Heading>
          </Section>
          <Section spacing={{ top: "sm" }}>
            <VStack spacing={6} fontSize="lg" maxWidth="850px">
              <Text>
                <strong>
                  Tukaj bodo razloženi različni načini botrovanja, in kako deluje v osnovi (čisto na
                  kratko). Podarjevanje botrstev pa je bolj podrobno razloženo na drugi strani,
                  tukaj je samo na kratko omenjeno.
                </strong>
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet ipsum
                facilisis magna consectetur bibendum. Maecenas non rutrum felis. Ut vestibulum
                pretium odio, vitae ornare tortor dapibus in. Quisque quis eros augue.
              </Text>
              <Text>
                Aenean egestas dignissim enim, at aliquam erat iaculis sit amet. Sed malesuada,
                tortor nec volutpat laoreet, nunc ante posuere purus, eu condimentum purus risus sed
                tortor. Curabitur scelerisque lobortis ante, sed egestas libero elementum sit amet.
                Morbi ut massa non tortor tincidunt consectetur ut ut augue. Fusce lacus turpis,
                suscipit a fringilla et, euismod a erat. Donec laoreet eleifend ante. Etiam ut
                fringilla purus, id mattis nunc.
              </Text>
              <Text>
                Phasellus fringilla eu nunc quis sagittis. Quisque iaculis vulputate leo sit amet
                laoreet. Sed et consequat nulla. Phasellus id condimentum leo. Ut auctor a dolor vel
                sagittis. Praesent a varius ligula. Aliquam in diam eget elit facilisis blandit.
              </Text>
              <Text>
                In suscipit, velit a mattis rutrum, dui arcu sollicitudin est, aliquam suscipit
                justo elit eget nunc. In id turpis quis mi ultrices feugiat. Mauris finibus enim sit
                amet neque accumsan, quis aliquet nibh consectetur. Praesent varius dui et nulla
                vestibulum porta. Quisque vulputate risus eros, eget ornare nunc sodales sed.
              </Text>
            </VStack>

            <VStack spacing={6}>
              <ButtonLink
                width="310px"
                href={ROUTES.CatsList}
                size="lg"
                mt={20}
                rightIcon={<Icon as={ArrowRight} />}
              >
                Posvoji muco na daljavo
              </ButtonLink>
              <ButtonLink
                width="310px"
                href={ROUTES.SpecialSponsorships}
                size="lg"
                mt={20}
                rightIcon={<Icon as={ArrowRight} />}
                colorScheme="purple"
              >
                Izberi posebno botrstvo
              </ButtonLink>
              <ButtonLink
                width="310px"
                href={ROUTES.CatsList}
                size="lg"
                mt={20}
                rightIcon={<Icon as={ArrowRight} />}
                colorScheme="blue"
              >
                Več o botrstvu kot darilu
              </ButtonLink>
            </VStack>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
};

export default BecomeSponsorOverviewPage;
