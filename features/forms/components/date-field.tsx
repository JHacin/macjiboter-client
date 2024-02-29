import { FC, forwardRef, MouseEventHandler, ReactNode } from "react";
import { FieldControl } from "./field-control";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import { useField } from "formik";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Calendar } from "@phosphor-icons/react";
import dayjs from "dayjs";
import { format, parseISO } from "date-fns";

const DatepickerInput = forwardRef<
  HTMLInputElement,
  { value?: string | null | undefined; onClick?: MouseEventHandler }
>(({ value, onClick }, ref) => {
  return (
    <InputGroup>
      <InputLeftElement onClick={onClick} cursor="pointer">
        <Icon as={Calendar} />
      </InputLeftElement>
      <Input
        ref={ref}
        onClick={onClick}
        value={value ? format(parseISO(value), "d. M. yyyy") : ""}
        placeholder="Izberi datum..."
        readOnly={true}
      />
    </InputGroup>
  );
});

DatepickerInput.displayName = "DatepickerInput";

export const DateField: FC<{
  name: string;
  label?: string;
  hint?: ReactNode;
  datePickerProps?: Partial<ReactDatePickerProps>;
}> = ({ name, label, hint, datePickerProps = {} }) => {
  const [field, _meta, helpers] = useField(name);

  return (
    <FieldControl name={name} label={label} hint={hint}>
      <DatePicker
        {...field}
        {...datePickerProps}
        selected={field.value ? dayjs(field.value).toDate() : null}
        onChange={(date) => {
          helpers.setValue(dayjs(date).isValid() ? dayjs(date).format("YYYY-MM-DD") : null);
        }}
        isClearable={true}
        customInput={<DatepickerInput />}
        disabledKeyboardNavigation={true}
        dateFormat="d. M. yyyy"
        locale="sl"
      />
    </FieldControl>
  );
};
