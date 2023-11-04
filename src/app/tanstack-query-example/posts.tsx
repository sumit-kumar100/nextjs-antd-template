"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getColumns } from "./columns";
import DataTable, { useTable } from "@/components/ui/data-table";
import { Box, Text } from "@/components/ui";

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

export default function TanstackExamplePosts() {
  const {
    pagination: { limit, offset, onPaginationChange },
    searchFilters: { filters, onFilterChange },
  } = useTable();

  const { data, isLoading } = useQuery({
    queryKey: ["posts", filters, offset, limit],
    queryFn: () => fetchPosts(filters, offset, limit),
  });

  return (
    <Box>
      <Text
        style={{
          display: "block",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Tanstack Example Posts - Server Side Pagination & Filters
      </Text>
      <Text style={{ display: "block", textAlign: "center" }}>
        Table filters are implemented correctly and is working, but
        jsonplaceholder doesn't support filtering using query params. Hence data
        will be empty while searching columns.
        <br />
        To Ensure, you can inspect network-tab to ensure api's call are being
        made.
      </Text>
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
    </Box>
  );
}
