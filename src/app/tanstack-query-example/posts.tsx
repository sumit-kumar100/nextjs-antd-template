"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getColumns } from "./columns";
import { Table } from "@/components/ui";
import { useTable } from "@/components/ui/table";
import { Box, Text, Flex } from "@/components/ui";

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
      <Flex
        vertical
        justify="center"
        align="center"
        className="p-2 text-center"
      >
        <Text className="font-bold">
          Tanstack Example Posts - Server Side Pagination & Filters
        </Text>
        <Text>
          Table filters are implemented correctly and are working, but
          jsonplaceholder doesn&apos;t support filtering using query params.
          Hence data will be empty while searching columns. To ensure, you can
          inspect the network tab to ensure API calls are being made.
        </Text>
      </Flex>
      <Table
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
