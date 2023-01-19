import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@chakra-ui/react";
import { QueryKey } from "@/api/types";
import { getPersonData } from "../util/api";
import { PersonData } from "../types";

export const SponsorDetails: FC<PersonData> = ({ first_name, city }) => {
  return (
    <span>
      {first_name ?? "brez imena"}, {city ?? "brez kraja"}
    </span>
  );
};

export const SponsorDetailsWithQuery: FC<{ id: number }> = ({ id }) => {
  const { data: sponsor, isSuccess } = useQuery([QueryKey.PersonData, id], () => getPersonData(id));

  if (!isSuccess) {
    return <Skeleton height="30px" width="110px" />;
  }

  return <SponsorDetails {...sponsor} />;
};
