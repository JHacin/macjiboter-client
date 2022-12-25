import { FC, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

interface FormGroupProps extends PropsWithChildren {
  spacing?: "md" | "lg";
}

export const FormGroup: FC<FormGroupProps> = ({ spacing = "md", children }) => {
  return <Box mb={spacing === "md" ? 4 : 8}>{children}</Box>;
};
