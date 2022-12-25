import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@chakra-ui/react";
import { QueryKey } from "@/api/types";
import { getPersonData } from "../util/api";

interface SponsorDetailsProps {
  id: number;
}

export const SponsorDetails: FC<SponsorDetailsProps> = ({ id }) => {
  const { data: sponsor, isSuccess } = useQuery([QueryKey.PersonData, id], () => getPersonData(id));

  if (!isSuccess) {
    return <Skeleton height="30px" width="110px" />;
  }

  const firstName = sponsor.first_name ?? "brez imena";
  const city = sponsor.city ?? "brez kraja";

  return (
    <span>
      {firstName}, {city}
    </span>
  );
};
