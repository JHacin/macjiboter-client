import { FC } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Section } from "../../components/section";
import { ContactEmailTextLink } from "../../components/text-link";
import { FAQ_ITEMS } from "./_faq-items";
import { ContainerNew } from "@/common/components/container";
import { PageTitle } from "../../components/page-title";
import { SectionWaves } from "../../components/section-waves";
import { PageSubtitle } from "../../components/page-subtitle";

export const FAQ: FC = () => {
  return (
    <>
      <Box backgroundColor="copper.100">
        <ContainerNew indent={1}>
          <Section spacing={{ top: "sm", bottom: "xs" }}>
            <PageTitle>pravila in pogosta vprašanja</PageTitle>

            <PageSubtitle>
              Na tem mestu so zbrani odgovori na nekatera izmed vprašanj, ki se pogosto pojavijo
              novim botrom. Če vas poleg tega še kar koli zanima, nas lahko kontaktirate prek
              e-pošte na naslovu <ContactEmailTextLink /> , in vam bomo odgovorili v najkrajšem
              možnem času.
            </PageSubtitle>
          </Section>
        </ContainerNew>
      </Box>
      <SectionWaves waveColor="light-1" bgColor="copper.100" />
      <Section spacing={{ top: "sm" }}>
        <ContainerNew indent={1}>
          <Accordion maxWidth="650px" allowMultiple={true}>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id}>
                <AccordionButton _expanded={{ bg: "copper.200" }}>
                  <Box py={{ base: 3, md: 4 }} flex="1" textAlign="left">
                    <Heading size={{ base: "sm", md: "md" }} pr={4}>
                      {item.title}
                    </Heading>
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
        </ContainerNew>
      </Section>
    </>
  );
};
