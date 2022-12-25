export const numericInputValueParser = (value: string) => {
  const asNumber = parseInt(value, 10);

  if (Number.isNaN(asNumber)) {
    return value;
  }

  return asNumber;
};
