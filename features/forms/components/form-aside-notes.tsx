import { FC, ReactNode } from "react";
import { Heart, IconProps, Question } from "phosphor-react";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { ContactEmailTextLink, TextLink } from "@/common/components/text-link";
import { ROUTES } from "@/common/constants";

interface FormAsideNoteProps {
  title: string;
  body: ReactNode;
  icon: FC<IconProps>;
}

const FormAsideNote: FC<FormAsideNoteProps> = ({ title, body, icon }) => {
  return (
    <Box bg="copper.100" py={5} px={4} shadow="sm">
      <HStack align="start" spacing={3}>
        <Icon as={icon} color="orange.500" weight="bold" boxSize={5} />
        <Box>
          <Text fontWeight="semibold" lineHeight={1.3}>
            {title}
          </Text>
          <Text mt={3}>{body}</Text>
        </Box>
      </HStack>
    </Box>
  );
};

export const FormAsideNotes: FC = () => {
  return (
    <VStack spacing={6}>
      <FormAsideNote
        title="Hvala vam, ker ste se odločili za botrstvo."
        body={
          <>
            Z vašo pomočjo lahko mucam omogočimo varno in zadovoljno življenje. Več o razlogih za
            botrovanje si lahko preberete <TextLink href={ROUTES.WhyBecomeSponsor}>tukaj.</TextLink>
          </>
        }
        icon={Heart}
      />
      <FormAsideNote
        title="Imate vprašanja?"
        body={
          <>
            Odgovore na pogosta vprašanja lahko najdete <TextLink href={ROUTES.FAQ}>tukaj</TextLink>
            . Za dodatne informacije pa nam lahko pišete na naslov <ContactEmailTextLink />.
          </>
        }
        icon={Question}
      />
    </VStack>
  );
};
