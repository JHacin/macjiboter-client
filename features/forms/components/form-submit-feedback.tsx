import { FC, ReactNode } from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Flex } from "@chakra-ui/react";
import { AlertStatus } from "@chakra-ui/alert";
import { ContactEmailTextLink } from "@/common/components/text-link";

interface FormSubmitFeedbackProps {
  status: AlertStatus;
  title: ReactNode;
  body: ReactNode;
}

export const FormSubmitFeedback: FC<FormSubmitFeedbackProps> = ({ status, title, body }) => {
  return (
    <Alert
      status={status}
      variant="subtle"
      flexDirection="column"
      alignItems="flex-start"
      p="6"
      rounded="md"
    >
      <Flex alignItems="center">
        <AlertIcon boxSize="24px" />
        <AlertTitle fontSize="lg">{title}</AlertTitle>
      </Flex>

      <AlertDescription mt={8} lineHeight={5}>
        {body}
      </AlertDescription>
    </Alert>
  );
};

export const FormSubmitFeedbackGenericError: FC = () => {
  return (
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
  );
};
