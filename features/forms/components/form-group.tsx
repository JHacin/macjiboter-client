import { FC, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

export const FormGroup: FC<PropsWithChildren> = ({ children }) => {
  return <Box mb={8}>{children}</Box>;
};
