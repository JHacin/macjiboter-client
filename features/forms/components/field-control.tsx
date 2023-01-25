import { FC, PropsWithChildren, ReactNode } from "react";
import { useField } from "formik";
import { Box, FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

interface FieldControlProps extends PropsWithChildren {
  name: string;
  label?: string;
  hint?: ReactNode;
  shouldHideError?: boolean;
}

export const FieldControl: FC<FieldControlProps> = ({
  name,
  label,
  hint,
  shouldHideError,
  children,
}) => {
  const [_field, meta, _helpers] = useField(name);
  const isInvalid = shouldHideError ? false : !!meta.error && meta.touched;

  return (
    <FormControl isInvalid={isInvalid}>
      {label && <FormLabel>{label}</FormLabel>}

      {children}

      {hint && (
        <Box fontSize="xs" mt={2} color="gray.600">
          {hint}
        </Box>
      )}
      {isInvalid && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
};
