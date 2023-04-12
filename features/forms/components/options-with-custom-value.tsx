import { FC, useState } from "react";
import { Box, Button, Grid, GridItem, Icon } from "@chakra-ui/react";
import { useField } from "formik";
import { TextField, TextFieldInputProps } from "./text-field";
import { FieldControl } from "./field-control";
import { FormOption } from "../types";
import { CheckCircle } from "@phosphor-icons/react";

interface OptionsWithCustomValueProps {
  name: string;
  label: string;
  options: FormOption[];
  onInputChangeOverride?: (value: any) => any;
  inputProps?: Pick<TextFieldInputProps, "type" | "leftElementIcon" | "placeholder">;
  isNumeric?: boolean;
  buttonsPerRow: {
    base: number;
    sm?: number;
  };
}

export const OptionsWithCustomValue: FC<OptionsWithCustomValueProps> = ({
  name,
  label,
  options,
  onInputChangeOverride,
  inputProps = {},
  isNumeric,
  buttonsPerRow,
}) => {
  const [field, _meta, helpers] = useField(name);
  const [isCustomValue, setIsCustomValue] = useState(
    !options.some((option) => option.value === field.value)
  );

  return (
    <FieldControl name={name} label={label} shouldHideError={true}>
      <Grid
        templateColumns={{
          base: `repeat(${buttonsPerRow.base}, 1fr)`,
          sm: `repeat(${buttonsPerRow.sm ?? buttonsPerRow.base}, 1fr)`,
        }}
        gap={2}
      >
        {options.map((option) => {
          const isActive = (!isCustomValue || !field.value) && option.value === field.value;

          return (
            <GridItem key={option.value} colSpan={1}>
              <Box position="relative">
                <Button
                  fontWeight="normal"
                  width="full"
                  onClick={() => {
                    setIsCustomValue(false);
                    helpers.setValue(option.value);
                  }}
                  colorScheme={isActive ? "orange" : "blackAlpha"}
                  variant={isActive ? "subtle" : "outline"}
                  borderColor={isActive ? "orange.500" : "blackAlpha.400"}
                  borderWidth="1px"
                  _hover={{
                    backgroundColor: isActive ? "orange.100" : "blackAlpha.100",
                  }}
                  fontSize={{ base: "sm", sm: "md" }}
                >
                  {option.label}
                </Button>

                {isActive && (
                  <Icon
                    as={CheckCircle}
                    color="orange.500"
                    weight="fill"
                    position="absolute"
                    right="4px"
                    top="4px"
                    boxSize={{ base: "14px", sm: "16px" }}
                  />
                )}
              </Box>
            </GridItem>
          );
        })}
        <GridItem
          colSpan={{
            base: buttonsPerRow.base,
            sm: buttonsPerRow.sm ?? buttonsPerRow.base,
          }}
        >
          <TextField
            name={name}
            inputProps={{
              ...inputProps,
              value: isCustomValue ? field.value : "",
              onChangeOverride: (event) => {
                setIsCustomValue(true);

                const value = event.target.value;

                if (onInputChangeOverride) {
                  onInputChangeOverride(value);
                  return;
                }

                helpers.setValue(value);
              },
              _placeholder: { fontSize: { base: "sm", sm: "md" } },
            }}
            isNumeric={isNumeric}
          />
        </GridItem>
      </Grid>
    </FieldControl>
  );
};
