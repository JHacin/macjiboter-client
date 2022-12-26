import { FC } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Section } from "../../components/section";
import { ContactEmailTextLink } from "../../components/text-link";
import { FAQ_ITEMS } from "./_faq-items";
import { Container } from "@/common/components/container";

export const FAQ: FC = () => {
  return (
    <>
      <Section spacing={{ bottom: "none" }}>
        <Box bgGradient="linear(to-br, blue.50, blue.100, blue.50)" shadow="md">
          <Container py={{ base: 12, md: 16, lg: 20, xl: 24 }} position="relative">
            <Heading size={{ base: "2xl", lg: "3xl" }}>Pravila in pogosta vprašanja</Heading>

            <Text
              fontSize={{ base: "mg", lg: "lg" }}
              mt={{ base: 6, lg: 10 }}
              maxW={{ base: "500px", lg: "640px" }}
            >
              Na tem mestu so zbrani odgovori na nekatera izmed vprašanj, ki se pogosto pojavijo
              novim botrom. Če vas poleg tega še kar koli zanima, nas lahko kontaktirate prek
              e-pošte na naslovu <ContactEmailTextLink /> , in vam bomo odgovorili v najkrajšem
              možnem času.
            </Text>
          </Container>
        </Box>
      </Section>

      <Section>
        <Container>
          <Accordion maxWidth="650px" allowMultiple={true}>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id}>
                <AccordionButton _expanded={{ bg: "copper.200" }}>
                  <Box py={4} flex="1" textAlign="left">
                    <Heading size="md">{item.title}</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <VStack spacing={4} py={4}>
                    {item.body}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>
    </>
  );
};
