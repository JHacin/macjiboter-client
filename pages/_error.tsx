import { NextPage } from "next";
import { Container } from "@/common/components/container";
import { Section } from "@/common/components/section";
import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { SmileySad } from "phosphor-react";
import { ContactEmailTextLink } from "@/common/components/text-link";

const CustomError: NextPage<{ statusCode?: number }> = ({ statusCode }) => {
  return (
    <>
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
              <Icon as={SmileySad} boxSize={16} />
              <Text as="span">Prišlo je do napake.</Text>
            </Heading>

            <Box maxWidth="650px" textAlign="center">
              <Text mt={16} color="red.500" fontWeight="bold" fontSize="lg">
                {statusCode
                  ? `Opis: napaka s številko ${statusCode} na strežniku.`
                  : "Opis: napaka na klientu."}
              </Text>
              <Text mt={4} fontSize="lg">
                Prosimo, poskusite ponovno. Če se napaka ponovi, vam bomo izredno hvaležni, če nas o
                tem obvestite na <ContactEmailTextLink /> (prosimo, če pripišete opis napake).
              </Text>
            </Box>
          </Box>
        </Section>
      </Container>
    </>
  );
};

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
