import { NextPage } from "next";
import { Container } from "@/common/components/container";
import { Box, Icon, Text, VStack } from "@chakra-ui/react";
import { useTheme } from "@/theme";
import { Section } from "@/common/components/section";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";
import { FilledPageTitle } from "@/common/components/page-title";
import { ContactEmailTextLink, TextLink } from "@/common/components/text-link";
import { EXTERNAL_LINKS } from "@/common/constants";
import { MapPin } from "@phosphor-icons/react";

const ContactPage: NextPage = () => {
  const { breakpoints } = useTheme();

  return (
    <Layout>
      <MetaTags title="Kontakt" description="Dosežete nas lahko na več načinov." />
      <Container>
        <Box maxWidth={breakpoints.xl} mx="auto">
          <Section spacing={{ bottom: "none" }}>
            <FilledPageTitle>kontakt</FilledPageTitle>
          </Section>
          <Section spacing={{ top: "sm" }}>
            <VStack spacing={16} fontSize={{ lg: "lg" }} maxWidth="850px">
              <VStack spacing={3}>
                <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="extrabold">
                  Zavod Mačja hiša, zavod za oskrbo mačk in osveščanje
                </Text>
                <Text
                  py={4}
                  fontSize={{ sm: "lg", lg: "xl" }}
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                >
                  <Icon as={MapPin} flexShrink={0} display={{ base: "none", sm: "block" }} />
                  <span>Groharjeva ulica 8, 3000 Celje</span>
                </Text>
                <Text>
                  <u>Matična številka</u>: 3636569000
                </Text>
                <Text>
                  <u>Davčna številka</u>: 65283503
                </Text>
                <Text>
                  <u>TRR</u>: SI56 6100 0000 2600 529, odprt pri Delavski hranilnici d.d. Ljubljana
                </Text>
                <Text pt={5} wordBreak="break-all">
                  Email: <ContactEmailTextLink />
                </Text>
                <Text wordBreak="break-all">
                  Facebook: <TextLink href={EXTERNAL_LINKS.FacebookPage}>povezava</TextLink>
                </Text>
                <Text wordBreak="break-all">
                  Instagram: <TextLink href={EXTERNAL_LINKS.InstagramPage}>povezava</TextLink>
                </Text>
              </VStack>
            </VStack>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
};

export default ContactPage;
