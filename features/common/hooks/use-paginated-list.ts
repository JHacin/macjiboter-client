import { NextRouter, useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PaginatedModelApiResponse, QueryKey } from "@/api/types";
import { objectToQueryString } from "../util/misc";
import { PaginatedListQueryParams } from "../types";
import { debounce } from "lodash-es";

type UsePaginatedListParams<TModel> = {
  queryKey: QueryKey;
  queryFn: (params: PaginatedListQueryParams) => Promise<PaginatedModelApiResponse<TModel>>;
};

const isString = (string: unknown): string is string => {
  return typeof string === "string";
};

const getInitialQueryParamsState = (query: NextRouter["query"]) => {
  const qp: PaginatedListQueryParams = {
    page: isString(query.page) ? query.page : "1",
  };

  if (isString(query.search)) {
    qp.search = query.search;
  }

  if (isString(query.sort)) {
    qp.sort = query.sort;
  }

  return qp;
};

export const usePaginatedList = <TModel>({ queryKey, queryFn }: UsePaginatedListParams<TModel>) => {
  const gridWrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [queryParams, setQueryParams] = useState<PaginatedListQueryParams>(
    router.isReady ? getInitialQueryParamsState(router.query) : { page: "1" }
  );
  const [searchInputValue, setSearchInputValue] = useState<string>(queryParams.search ?? "");
  const [isInitialized, setIsInitialized] = useState(router.isReady);

  useEffect(() => {
    if (!router.isReady || isInitialized) {
      return;
    }

    const initialQueryParams = getInitialQueryParamsState(router.query);

    if (initialQueryParams.search) {
      setSearchInputValue(initialQueryParams.search);
    }

    setQueryParams(initialQueryParams);
    setIsInitialized(true);
  }, [isInitialized, router.isReady, router.query]);

  const query = useQuery([queryKey, queryParams], () => queryFn(queryParams), {
    keepPreviousData: true,
    staleTime: Infinity,
    enabled: isInitialized,
  });

  const updateQueryParams = useCallback(
    (qp: PaginatedListQueryParams) => {
      setQueryParams(qp);

      const queryString = objectToQueryString(qp, false);
      // noinspection JSIgnoredPromiseFromCall
      router.replace({ query: queryString }, undefined, { shallow: true });
    },
    [router]
  );

  const setPage = useCallback(
    (page: number) => {
      updateQueryParams({ ...queryParams, page: String(page) });
    },
    [queryParams, updateQueryParams]
  );

  const setSearchParam = useCallback(
    (search: string) => {
      const qp: PaginatedListQueryParams = {
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

  const debouncedSetSearchParam = useMemo(() => debounce(setSearchParam, 400), [setSearchParam]);

  const setSearch = useCallback(
    (search: string) => {
      setSearchInputValue(search);
      debouncedSetSearchParam(search);
    },
    [debouncedSetSearchParam]
  );

  const setSort = useCallback(
    (sort: string) => {
      updateQueryParams({ ...queryParams, sort, page: "1" });
    },
    [queryParams, updateQueryParams]
  );

  const handlePaginationButtonClick = (page: number) => {
    setPage(page);
    gridWrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };

  return {
    query,
    queryParams,
    setPage,
    searchInputValue,
    setSearch,
    setSort,
    gridWrapperRef,
    handlePaginationButtonClick,
    isReady: isInitialized,
  };
};
