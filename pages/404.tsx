import { NextPage } from "next";
import { Container } from "@/common/components/container";
import { Section } from "@/common/components/section";
import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { SmileyMeh } from "@phosphor-icons/react";
import { ContactEmailTextLink, TextLink } from "@/common/components/text-link";
import { ROUTES } from "@/common/constants";
import { Layout } from "@/common/components/layout";

const Custom404Page: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Section>
          <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
            <Heading
              size="2xl"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              gap={4}
              bgColor="orange.100"
              px={4}
              py={2}
            >
              <Icon as={SmileyMeh} boxSize={16} />
              <Text as="span">Ta stran ne obstaja.</Text>
            </Heading>

            <Box maxWidth="650px" textAlign="center">
              <Text mt={16} fontSize={{ lg: "lg" }}>
                Če menite, da je prišlo do napake, oziroma ne najdete tega, kar ste iskali, nam
                lahko pišete na <ContactEmailTextLink />.
              </Text>
              <Text fontSize={{ lg: "lg" }} mt={4}>
                Lahko se tudi vrnete na <TextLink href={ROUTES.Home}>prvo stran</TextLink>.
              </Text>
            </Box>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Custom404Page;
