import { FC, ReactNode } from "react";
import { CheckboxField } from "@/forms/components/checkbox-field";
import { useFormikContext } from "formik";
import { FormSubmitFeedback } from "@/forms/components/form-submit-feedback";
import { FormSubmitStatus } from "@/forms/types";
import { FormGroup } from "@/forms/components/form-group";
import { ContactEmailTextLink } from "@/common/components/text-link";
import { Text, VStack } from "@chakra-ui/react";
import { FormNote } from "./form-note";

export const SummaryStep: FC<{ agreementCheckboxText: ReactNode; beforeContent?: ReactNode }> = ({
  agreementCheckboxText,
  beforeContent,
}) => {
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
        <FormNote>
          Po oddaji obrazca boste na svoj elektronski naslov prejeli samodejni odgovor z nadaljnimi
          podatki glede plačila.
        </FormNote>
      </FormGroup>

      {beforeContent && beforeContent}

      <FormGroup>
        <CheckboxField
          name="is_agreed_to_terms"
          label={agreementCheckboxText}
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

      {status === FormSubmitStatus.Error && (
        <FormSubmitFeedback
          status="error"
          title="Prišlo je do napake."
          body={
            <>
              Vaših podatkov žal nismo prejeli. Prosimo, poskusite jih ponovno poslati. Če se napaka
              ponovi, nam pišite na <ContactEmailTextLink />.
            </>
          }
        />
      )}
    </>
  );
};
