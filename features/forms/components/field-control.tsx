import { FC, PropsWithChildren } from "react";
import { useField } from "formik";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

interface FieldControlProps extends PropsWithChildren {
  name: string;
  label?: string;
  shouldHideError?: boolean;
}

export const FieldControl: FC<FieldControlProps> = ({ name, label, shouldHideError, children }) => {
  const [_field, meta, _helpers] = useField(name);
  const isInvalid = shouldHideError ? false : !!meta.error && meta.touched;

  return (
    <FormControl isInvalid={isInvalid}>
      {label && <FormLabel>{label}</FormLabel>}

      {children}

      {isInvalid && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
};
