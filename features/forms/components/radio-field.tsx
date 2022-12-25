import { FC } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useField } from "formik";
import { FieldControl } from "./field-control";
import { FormOption } from "../types";

interface RadioFieldProps {
  name: string;
  label: string;
  options: FormOption[];
  onChangeOverride?: (value: string) => void;
}

export const RadioField: FC<RadioFieldProps> = ({ name, label, options, onChangeOverride }) => {
  const [field, _meta, helpers] = useField(name);

  return (
    <FieldControl name={name} label={label}>
      <RadioGroup
        {...field}
        onChange={(nextValue) => {
          if (onChangeOverride) {
            onChangeOverride(nextValue);
            return;
          }

          helpers.setValue(nextValue);
        }}
      >
        <Stack direction="row" spacing={4}>
          {options.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FieldControl>
  );
};
