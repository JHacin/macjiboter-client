import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { getCat } from "../util/api";

export const useCurrentCat = () => {
  const router = useRouter();
  const slug = router.query.slug as string;

  return useQuery([QueryKey.Cat, slug], () => getCat(slug));
};
