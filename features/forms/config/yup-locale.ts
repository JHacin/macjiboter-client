import { LocaleObject } from "yup";

export const locale: LocaleObject = {
  mixed: {
    default: "Vrednost ni veljavna.",
    required: "Polje je obvezno.",
    oneOf: "Vrednost mora biti ena izmed: ${values}.",
    notOneOf: "Vrednost ne sme biti ena izmed: ${values}.",
    defined: "Vrednost mora biti definirana.",
    notType: ({ type }) => {
      if (type === "string") {
        return "Vrednost mora biti beseda.";
      }

      if (type === "number") {
        return "Vrednost mora biti številka.";
      }

      if (type === "date") {
        return "Vrednost mora biti datum.";
      }

      return "Vrednost ni veljavna.";
    },
  },
  string: {
    length: "Vrednost mora vsebovati točno ${length} znakov.",
    min: "Vrednost mora vsebovati najmanj ${min} znakov.",
    max: "Vrednost mora vsebovati največ ${max} znakov.",
    matches: '${path} must match the following: "${regex}"',
    email: "Vrednost mora biti veljaven e-mail naslov.",
    url: "Vrednost mora biti veljavna spletna povezava.",
    uuid: "${path} must be a valid UUID",
    trim: "${path} must be a trimmed string",
    lowercase: "Vrednost mora vsebovati samo male tiskane črke.",
    uppercase: "Vrednost mora vsebovati samo velike tiskane črke.",
  },
  number: {
    min: "Vrednost mora biti vsaj ${min}.",
    max: "Vrednost mora biti največ ${max}.",
    lessThan: "Vrednost mora biti manj kot ${less}.",
    moreThan: "Vrednost mora biti več kot ${more}.",
    positive: "Vrednost mora biti višja od 0.",
    negative: "Vrednost mora biti negativna.",
    integer: "Vrednost mora biti polna številka.",
  },
  date: {
    min: "Datum mora biti kasneje kot ${min}.",
    max: "Datum mora biti prej kot ${max}.",
  },
  object: {
    noUnknown: "${path} field has unspecified keys: ${unknown}",
  },
  array: {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items",
  },
  boolean: {
    isValue: "${path} field must be ${value}",
  },
};
