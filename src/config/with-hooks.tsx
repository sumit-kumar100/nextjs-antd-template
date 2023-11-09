import { NextPageProps } from "@/types/globals";
import type { FormInstance } from "antd/lib/form";
import type {
  UseQueryOptions,
  UseQueryResult,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import type {
  UseDataTable,
  UsePagination,
  UseFilter,
} from "@/components/data-table";
import {
  useDataTable,
  usePagination,
  useFilter,
} from "@/components/data-table";

export type WithHookProps = {
  useQuery: <TData = unknown, TError = Error>(
    options: UseQueryOptions<TData, TError>,
  ) => UseQueryResult<TData, TError>;
  useMutation: <
    TData = unknown,
    TError = Error,
    TVariables = void,
    TContext = unknown,
  >(
    options: UseMutationOptions<TData, TError, TVariables, TContext>,
  ) => UseMutationResult<TData, TError, TVariables, TContext>;
  useTable: () => UseDataTable;
  usePagination: () => UsePagination;
  useFilter: () => UseFilter;
  useForm: <Values = any>(
    form?: FormInstance<Values>,
  ) => [FormInstance<Values>];
};

export function withHooks(Component: any) {
  return async (props: NextPageProps) => {
    const { useQuery, useMutation } = await import("@tanstack/react-query");
    const { useForm } = await import("antd/lib/form").then(
      (module) => module.default,
    );
    return (
      <Component
        useQuery={useQuery}
        useMutation={useMutation}
        useDataTable={useDataTable}
        usePagination={usePagination}
        useFilter={useFilter}
        useForm={useForm}
        {...props}
      />
    );
  };
}
