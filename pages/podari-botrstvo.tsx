import { NextPage } from "next";
import { Container } from "@/common/components/container";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";

const GiftSponsorshipOverviewPage: NextPage = () => {
  const { breakpoints } = useTheme();

  return (
    <Layout>
      <MetaTags title="Podari botrstvo" description="Mačje botrstvo je lahko izvrstno darilo." />
      <Container>
        <Box maxWidth={breakpoints.xl} mx="auto">
          <Section spacing={{ bottom: "none" }}>
            <Heading size="3xl" bgColor="copper.200" display="inline-block" px={6} py={5}>
              Botrstvo kot darilo
            </Heading>
          </Section>
          <Section spacing={{ top: "sm" }}>
            <VStack spacing={6} fontSize="lg" maxWidth="850px">
              <Text>
                <strong>
                  Tukaj bo opisano kako sploh deluje v praksi obdarovanje z botrstvi - kaj to pomeni
                  za plačnika in za obdarovanca, kaj dobi obdarovanec in kakšne so možnosti
                  prilagoditve / dodajanja osebne note, katera botrstva se lahko podari, itd. Mogoče
                  bi ble fajn kake luštne slikce daril.
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
          </Section>
        </Box>
      </Container>
    </Layout>
  );
};

export default GiftSponsorshipOverviewPage;
