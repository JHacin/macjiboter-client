import { FC } from "react";
import { CheckboxField } from "@/forms/components/checkbox-field";
import { useFormikContext } from "formik";
import {
  FormSubmitFeedback,
  FormSubmitFeedbackGenericError,
} from "@/forms/components/form-submit-feedback";
import { FormSubmitStatus } from "@/forms/types";

export const SummaryStep: FC = () => {
  const { status } = useFormikContext();

  if (status === FormSubmitStatus.Success) {
    return (
      <FormSubmitFeedback
        status="success"
        title="Hvala!"
        body="Na vaš e-mail naslov vam bomo poslali navodila za zaključek postopka."
      />
    );
  }

  return (
    <>
      <CheckboxField
        name="is_agreed_to_terms"
        label={
          "Potrjujem, da sem seznanjen/a s pravili botrstva in se z njimi strinjam " +
          "ter Mačji hiši dovoljujem rabo osebnih podatkov izključno za namene obveščanja."
        }
      />

      {status === FormSubmitStatus.Error && <FormSubmitFeedbackGenericError />}
    </>
  );
};
