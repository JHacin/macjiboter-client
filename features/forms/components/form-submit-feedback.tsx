import { FC, ReactNode } from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Flex } from "@chakra-ui/react";
import { AlertStatus } from "@chakra-ui/alert";

interface FormSubmitFeedbackProps {
  status: AlertStatus;
  title: ReactNode;
  body: ReactNode;
}

export const FormSubmitFeedback: FC<FormSubmitFeedbackProps> = ({ status, title, body }) => {
  return (
    <Alert status={status} variant="subtle" flexDirection="column" alignItems="flex-start" p="6">
      <Flex alignItems="center">
        <AlertIcon boxSize="20px" />
        <AlertTitle>{title}</AlertTitle>
      </Flex>

      <AlertDescription mt={4} lineHeight={5} fontSize="sm">
        {body}
      </AlertDescription>
    </Alert>
  );
};
