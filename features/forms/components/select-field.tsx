import { FC } from "react";
import { useField } from "formik";
import { Select } from "@chakra-ui/react";
import { FieldControl } from "./field-control";
import { FormOption } from "../types";

interface SelectFieldProps {
  name: string;
  label: string;
  options: FormOption[];
  onChangeOverride?: (value: string) => void;
}

export const SelectField: FC<SelectFieldProps> = ({ name, label, options, onChangeOverride }) => {
  const [field, _meta, helpers] = useField(name);

  return (
    <FieldControl name={name} label={label}>
      <Select
        value={field.value}
        onChange={(event) => {
          const value = event.target.value;

          if (onChangeOverride) {
            onChangeOverride(value);
            return;
          }

          helpers.setValue(value);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FieldControl>
  );
};
