import { FC } from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { GetCatsQueryParams } from "../../util/api";

interface CatListSortProps {
  onChange: (sort: GetCatsQueryParams["sort"]) => void;
}

interface SortOption {
  label: string;
  value: GetCatsQueryParams["sort"];
}

const sortOptions: SortOption[] = [
  { label: "Datum objave (najprej novejši)", value: "id_desc" },
  { label: "Datum objave (najprej starejši)", value: "id_asc" },
  { label: "Število botrov (največ do najmanj)", value: "sponsors_desc" },
  { label: "Število botrov (najmanj do največ)", value: "sponsors_asc" },
  { label: "Starost (najprej starejši)", value: "age_desc" },
  { label: "Starost (najprej mlajši)", value: "age_asc" },
];

const defaultSortValue: GetCatsQueryParams["sort"] = "id_desc";

export const SortControls: FC<CatListSortProps> = ({ onChange }) => {
  return (
    <FormControl>
      <FormLabel>Razvrsti po</FormLabel>
      <Select
        onChange={(event) => {
          onChange(event.target.value as GetCatsQueryParams["sort"]);
        }}
        defaultValue={defaultSortValue}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
