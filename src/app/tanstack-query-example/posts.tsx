"use client";
import useTable from "@/hooks/useTable";
import { fetchPosts } from "./fetch-posts";
import { useQuery } from "@tanstack/react-query";
import { getColumns } from "./columns";
import { DataTable, Box, Text, Flex } from "@/components/ui";
import NextImage from "@/components/next-image";

export default function TanstackExamplePosts() {
  const { pagination, filter } = useTable();

  const { data, isLoading } = useQuery({
    queryKey: ["posts", pagination.limit, pagination.offset, filter.params],
    queryFn: () =>
      fetchPosts(pagination.limit, pagination.offset, filter.params),
  });

  return (
    <Box>
      <NextImage src="/next.svg" alt="Next.js Logo" style={{ width: 100 }} />
      <Flex
        vertical
        justify="center"
        align="center"
        className="p-2 text-center"
      >
        <Text className="font-bold">
          Tanstack Example Posts - Server Side Pagination & Filter
        </Text>
        <Text>
          Table filter are implemented correctly and are working, but
          jsonplaceholder doesn&apos;t support filtering using query params.
          Hence data will be empty while searching columns. To ensure, you can
          inspect the network tab to ensure API calls are being made.
        </Text>
      </Flex>
      <DataTable
        loading={isLoading}
        dataSource={data}
        columns={getColumns({ pagination, filter })}
        pagination={{
          ...pagination,
          total: 100,
        }}
      />
    </Box>
  );
}
