import { ChangeEventHandler, FC } from "react";
import { Input, Icon, InputProps } from "@chakra-ui/react";
import { useField } from "formik";
import { InputGroup, InputLeftElement } from "@chakra-ui/input";
import { IconProps } from "phosphor-react";
import { FieldControl } from "./field-control";

export interface TextFieldInputProps {
  type?: "text" | "number";
  leftElementIcon?: FC<IconProps>;
  placeholder?: string;
  value?: any;
  onChangeOverride?: ChangeEventHandler<HTMLInputElement>;
  autoComplete?: string | undefined;
}

export interface TextFieldProps {
  name: string;
  label?: string;
  inputProps?: TextFieldInputProps;
}

export const TextField: FC<TextFieldProps> = ({
  name,
  label,
  inputProps: {
    type = "text",
    leftElementIcon,
    placeholder,
    value,
    onChangeOverride,
    autoComplete,
  } = {},
}) => {
  const [field, _meta, _helpers] = useField(name);

  const inputProps: InputProps = {
    ...field,
    type,
    placeholder,
    autoComplete,
    value: value ?? field.value ?? "",
    onChange: onChangeOverride ?? field.onChange,
  };

  return (
    <FieldControl name={name} label={label}>
      <InputGroup>
        {leftElementIcon && (
          <InputLeftElement pointerEvents="none">
            <Icon as={leftElementIcon} color="gray.500" />
          </InputLeftElement>
        )}
        <Input {...inputProps} _placeholder={{ fontSize: "sm" }} />
      </InputGroup>
    </FieldControl>
  );
};
