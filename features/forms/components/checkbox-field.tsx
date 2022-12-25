import { FC, ReactNode } from "react";
import { useField } from "formik";
import { Checkbox, CheckboxProps } from "@chakra-ui/react";
import { FieldControl } from "./field-control";

interface CheckboxFieldProps {
  name: string;
  label: ReactNode;
  checkboxProps?: CheckboxProps;
}

export const CheckboxField: FC<CheckboxFieldProps> = ({ name, label, checkboxProps }) => {
  const [field, _meta, _helpers] = useField(name);

  return (
    <FieldControl name={name}>
      <Checkbox {...checkboxProps} {...field} isChecked={field.value} spacing={3}>
        {label}
      </Checkbox>
    </FieldControl>
  );
};
