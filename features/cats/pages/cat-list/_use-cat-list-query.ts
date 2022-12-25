import { useCallback, useState } from "react";
import {
  GET_CATS_SORT_VARIANTS,
  getCats,
  GetCatsQueryParams,
  GetCatsSortVariant,
} from "../../util/api";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/api/types";
import { objectToQueryString } from "@/common/util/misc";
import { NextRouter, useRouter } from "next/router";

const getInitialQueryParamsState = (router: NextRouter) => {
  const isString = (string: unknown): string is string => {
    return typeof string === "string";
  };

  const isSortVariant = (string: unknown): string is GetCatsSortVariant => {
    return isString(string) && string in GET_CATS_SORT_VARIANTS;
  };

  return {
    page: isString(router.query.page) ? router.query.page : "1",
    search: isString(router.query.search) ? router.query.search : undefined,
    sort: isSortVariant(router.query.sort) ? router.query.sort : undefined,
  };
};

export const useCatListQuery = () => {
  const router = useRouter();

  const [queryParams, setQueryParams] = useState<GetCatsQueryParams>(
    getInitialQueryParamsState(router)
  );

  const result = useQuery([QueryKey.Cats, queryParams], () => getCats(queryParams), {
    keepPreviousData: true,
    staleTime: Infinity,
  });

  const updateQueryParams = useCallback(
    async (qp: GetCatsQueryParams) => {
      setQueryParams(qp);

      const queryString = objectToQueryString(qp, false);
      await router.replace({ query: queryString }, undefined, { shallow: true });
    },
    [router]
  );

  const setPage = useCallback(
    (page: number) => {
      updateQueryParams({ ...queryParams, page: String(page) });
    },
    [queryParams, updateQueryParams]
  );

  const setSearch = useCallback(
    (search: string) => {
      const qp: GetCatsQueryParams = {
        ...queryParams,
        search,
        page: "1",
      };

      if (!search) {
        delete qp.search;
      }

      updateQueryParams(qp);
    },
    [queryParams, updateQueryParams]
  );

  const setSort = useCallback(
    (sort: GetCatsQueryParams["sort"]) => {
      updateQueryParams({ ...queryParams, sort, page: "1" });
    },
    [queryParams, updateQueryParams]
  );

  return {
    result,
    queryParams,
    setPage,
    setSearch,
    setSort,
  };
};
