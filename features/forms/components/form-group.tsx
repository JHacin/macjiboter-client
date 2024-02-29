import { FC, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import { FORM_GROUP_SPACING } from "../constants";

export const FormGroup: FC<PropsWithChildren> = ({ children }) => {
  return <Box mb={FORM_GROUP_SPACING}>{children}</Box>;
};
