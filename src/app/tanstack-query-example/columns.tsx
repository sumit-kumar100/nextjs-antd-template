"use client";

import { Flex, Text, TextFilter } from "@/components/ui";
import { UseDataTable, DataTableColumnsType } from "@/components/data-table";

type DataType = {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
};

export const getColumns = ({
  pagination: { onPaginationChange },
  filter: { onFilterChange },
}: UseDataTable): DataTableColumnsType<DataType> => {
  return [
    {
      key: "id",
      title: () => (
        <Flex vertical justify="center" align="center" gap={4}>
          <Text>ID</Text>
          <TextFilter
            filterName="id"
            onFilterChange={onFilterChange}
            onPaginationChange={onPaginationChange}
          />
        </Flex>
      ),
      dataIndex: "id",
      render: (text) => <span>{text}</span>,
    },
    {
      key: "title",
      title: () => (
        <Flex vertical justify="center" align="center" gap={4}>
          <Text>Title</Text>
          <TextFilter
            filterName="title"
            onFilterChange={onFilterChange}
            onPaginationChange={onPaginationChange}
          />
        </Flex>
      ),
      dataIndex: "title",
      render: (text) => <span>{text.slice(0, 50)}</span>,
    },
    {
      key: "body",
      title: () => (
        <Flex vertical justify="center" align="center" gap={4}>
          <Text>Body</Text>
          <TextFilter
            filterName="body"
            onFilterChange={onFilterChange}
            onPaginationChange={onPaginationChange}
          />
        </Flex>
      ),
      dataIndex: "body",
      render: (text) => <span>{text.slice(0, 50)}</span>,
    },
  ];
};
