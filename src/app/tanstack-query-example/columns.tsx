"use client";

import { Flex, Text, TextFilter } from "@/components/ui";
import { ColumnsType } from "@/types/ui";
import { FilterProps } from "@/types/hooks";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export const getColumns = (props: FilterProps): ColumnsType<DataType> => {
  return [
    {
      key: "id",
      title: () => (
        <Flex vertical justify="center" align="center" gap={4}>
          <Text>ID</Text>
          <TextFilter filterName="id" onFilterChange={props.onFilterChange} />
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
            onFilterChange={props.onFilterChange}
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
          <TextFilter filterName="body" onFilterChange={props.onFilterChange} />
        </Flex>
      ),
      dataIndex: "body",
      render: (text) => <span>{text.slice(0, 50)}</span>,
    },
  ];
};
