import { FC, ReactNode } from "react";
import { FieldControl } from "./field-control";
import { Textarea } from "@chakra-ui/react";
import { useField } from "formik";

export const TextareaField: FC<{ name: string; label?: string; hint?: ReactNode }> = ({
  name,
  label,
  hint,
}) => {
  const [field, _meta, _helpers] = useField(name);

  return (
    <FieldControl name={name} label={label} hint={hint}>
      <Textarea {...field} />
    </FieldControl>
  );
};
