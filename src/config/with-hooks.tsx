import { NextPageProps } from "@/types/globals";
import {
  useDataTable,
  usePagination,
  useFilter,
} from "@/components/data-table";

export type WithHookProps = any;

export function withHooks(Component: any) {
  return async (props: NextPageProps) => {
    const { useQuery } = await import("@tanstack/react-query").then(
      (module) => module.default,
    );
    const { useForm } = await import("antd/lib/form").then(
      (module) => module.default,
    );
    return (
      <Component
        useQuery={useQuery}
        useDataTable={useDataTable}
        usePagination={usePagination}
        useFilter={useFilter}
        useForm={useForm}
        {...props}
      />
    );
  };
}
