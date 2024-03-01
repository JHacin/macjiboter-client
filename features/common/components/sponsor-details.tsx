import { PersonData } from "../types";

export function SponsorDetails({ first_name, city }: Pick<PersonData, "first_name" | "city">) {
  return (
    <span>
      {first_name ?? "brez imena"}, {city ?? "brez kraja"}
    </span>
  );
}
