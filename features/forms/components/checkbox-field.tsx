import { FC, ReactNode } from "react";
import { useField } from "formik";
import { Checkbox, CheckboxProps } from "@chakra-ui/react";
import { FieldControl } from "./field-control";

interface CheckboxFieldProps {
  name: string;
  label: ReactNode;
  hint?: ReactNode;
  checkboxProps?: CheckboxProps;
}

export const CheckboxField: FC<CheckboxFieldProps> = ({ name, label, hint, checkboxProps }) => {
  const [field, _meta, _helpers] = useField(name);

  return (
    <FieldControl name={name} hint={hint}>
      <Checkbox {...checkboxProps} {...field} isChecked={field.value} spacing={3}>
        {label}
      </Checkbox>
    </FieldControl>
  );
};
