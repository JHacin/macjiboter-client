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
import { PageSubtitle } from "../../components/page-subtitle";
import { PageHeaderFilled } from "../../components/page-header-filled";

export const FAQ: FC = () => {
  return (
    <>
      <PageHeaderFilled>
        <PageTitle>pogosta vprašanja</PageTitle>
        <PageSubtitle>
          Če med spodaj navedenimi ni odgovora na vaše vprašanje, nam pišite na{" "}
          <ContactEmailTextLink />. Potrudili se bomo, da vam odgovorimo v najkrajšem možnem času.
        </PageSubtitle>
      </PageHeaderFilled>

      <Section>
        <ContainerNew indent={1}>
          <Accordion maxWidth="650px" allowMultiple={true}>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id}>
                <AccordionButton _expanded={{ bg: "copper.200" }}>
                  <Box py={{ base: 3, md: 4 }} flex="1" textAlign="left">
                    <Heading size="md" pr={4}>
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
