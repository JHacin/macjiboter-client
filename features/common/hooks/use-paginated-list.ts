import { NextRouter, useRouter } from "next/router";
import { useCallback, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PaginatedModelApiResponse, QueryKey } from "@/api/types";
import { objectToQueryString } from "../util/misc";
import { PaginatedListQueryParams } from "../types";
import { debounce } from "lodash-es";

const getInitialQueryParamsState = (router: NextRouter) => {
  const isString = (string: unknown): string is string => {
    return typeof string === "string";
  };

  const qp: PaginatedListQueryParams = {
    page: isString(router.query.page) ? router.query.page : "1",
  };

  if (isString(router.query.search)) {
    qp.search = router.query.search;
  }

  if (isString(router.query.sort)) {
    qp.sort = router.query.sort;
  }

  return qp;
};

export const usePaginatedList = <TModel>({
  queryKey,
  queryFn,
}: {
  queryKey: QueryKey;
  queryFn: (params: PaginatedListQueryParams) => Promise<PaginatedModelApiResponse<TModel>>;
}) => {
  const gridWrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [queryParams, setQueryParams] = useState(getInitialQueryParamsState(router));

  const query = useQuery([queryKey, queryParams], () => queryFn(queryParams), {
    keepPreviousData: true,
    staleTime: Infinity,
  });

  const updateQueryParams = useCallback(
    async (qp: PaginatedListQueryParams) => {
      setQueryParams(qp);

      const queryString = objectToQueryString(qp, false);
      await router.replace({ query: queryString }, undefined, { shallow: true });
    },
    [router]
  );

  const setPage = useCallback(
    async (page: number) => {
      await updateQueryParams({ ...queryParams, page: String(page) });
    },
    [queryParams, updateQueryParams]
  );

  const setSearch = useCallback(
    async (search: string) => {
      const qp: PaginatedListQueryParams = {
        ...queryParams,
        search,
        page: "1",
      };

      if (!search) {
        delete qp.search;
      }

      await updateQueryParams(qp);
    },
    [queryParams, updateQueryParams]
  );

  const setSort = useCallback(
    async (sort: string) => {
      await updateQueryParams({ ...queryParams, sort, page: "1" });
    },
    [queryParams, updateQueryParams]
  );

  const handlePaginationButtonClick = async (page: number) => {
    await setPage(page);
    gridWrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };

  const debouncedSetSearch = useMemo(() => debounce(setSearch, 400), [setSearch]);

  return {
    query,
    queryParams,
    setPage,
    setSearch,
    debouncedSetSearch,
    setSort,
    gridWrapperRef,
    handlePaginationButtonClick,
  };
};
