"use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getColumns } from "./columns";
import DataTable, { useTable } from "@/components/ui/data-table";

async function fetchPosts(filters: Object, offset: number, limit: number) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params: {
        _limit: limit,
        _page: offset,
        ...filters,
      },
    },
  );
  return response.data;
}

export default function UserForm() {
  const {
    pagination: { limit, offset, onPaginationChange },
    searchFilters: { filters, onFilterChange },
  } = useTable();

  const { data, isLoading } = useQuery({
    queryKey: ["posts", filters, offset, limit],
    queryFn: () => fetchPosts(filters, offset, limit),
  });

  return (
    <main>
      <DataTable
        loading={isLoading}
        dataSource={data}
        columns={getColumns({
          filters,
          onFilterChange,
        })}
        pagination={{
          limit: limit,
          offset: offset,
          onPaginationChange: onPaginationChange,
          total: 100,
        }}
      />
    </main>
  );
}
