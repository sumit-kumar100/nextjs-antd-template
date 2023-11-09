"use client";

import DataTable, { useDataTable } from "@/components/data-table";
import { fetchPosts } from "./fetch-posts";
import { getColumns } from "./columns";
import { Box, Text, Flex } from "@/components/ui";
import { withHooks } from "@/config/with-hooks";
import { NextPageWithHookProps } from "@/types/globals";

function TanstackExamplePosts({ useQuery }: NextPageWithHookProps) {
  const { pagination, filter } = useDataTable();

  const { data, isLoading } = useQuery({
    queryKey: ["posts", pagination.limit, pagination.offset, filter.params],
    queryFn: () =>
      fetchPosts(pagination.limit, pagination.offset, filter.params),
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

export default withHooks(TanstackExamplePosts);
