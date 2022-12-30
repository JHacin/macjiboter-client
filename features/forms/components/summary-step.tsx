import { FC } from "react";
import { CheckboxField } from "@/forms/components/checkbox-field";
import { useFormikContext } from "formik";
import {
  FormSubmitFeedback,
  FormSubmitFeedbackGenericError,
} from "@/forms/components/form-submit-feedback";
import { FormSubmitStatus } from "@/forms/types";
import { FormGroup } from "@/forms/components/form-group";
import { ContactEmailTextLink, TextLink } from "@/common/components/text-link";
import { ROUTES } from "@/common/constants";
import { Box, Text, VStack } from "@chakra-ui/react";

export const SummaryStep: FC = () => {
  const { status } = useFormikContext();

  if (status === FormSubmitStatus.Success) {
    return (
      <FormSubmitFeedback
        status="success"
        title="Prejeli smo vaše podatke."
        body={
          <VStack spacing={4}>
            <Text>
              V kratkem boste na svoj e-mail naslov prejeli samodejni odgovor z nadaljnimi podatki
              za nakazilo.
            </Text>
            <Text>
              Prosimo, preverite tudi nezaželeno pošto in kategorijo Promocije. V primeru, da
              sporočila ne prejmete, nam prosim pišite na <ContactEmailTextLink />.
            </Text>
          </VStack>
        }
      />
    );
  }

  return (
    <>
      <FormGroup>
        <Box bg="orange.100" rounded="md" py={4} px={5} fontSize="sm">
          Po oddaji obrazca boste na svoj elektronski naslov prejeli samodejni odgovor z nadaljnimi
          podatki glede plačila.
        </Box>
      </FormGroup>

      <FormGroup>
        <CheckboxField
          name="is_agreed_to_terms"
          label={
            <>
              Potrjujem, da se strinjam s{" "}
              <TextLink href={ROUTES.FAQ} isExternal={true}>
                pravili botrstva
              </TextLink>
              , ter da Mačji hiši dovoljujem rabo osebnih podatkov izključno za namene obveščanja.
            </>
          }
          checkboxProps={{
            alignItems: "flex-start",
            sx: {
              ".chakra-checkbox__control": {
                mt: 1,
              },
              ".chakra-checkbox__label": {
                fontSize: "sm",
              },
            },
          }}
        />
      </FormGroup>

      {status === FormSubmitStatus.Error && <FormSubmitFeedbackGenericError />}
    </>
  );
};
