"use client";

import { Box, Text, TextFilter } from "@/components/ui";
import { ColumnsType, FilterProps } from "@/components/ui/types";

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
      title: () => (
        <Box>
          <Text className="block text-center">ID</Text>
          <TextFilter
            filterName="title"
            onFilterChange={props.onFilterChange}
          />
        </Box>
      ),
      dataIndex: "id",
      key: "id",
      render: (text) => <span>{text}</span>,
    },
    {
      title: () => (
        <Box>
          <Text className="block text-center">Title</Text>
          <TextFilter
            filterName="title"
            onFilterChange={props.onFilterChange}
          />
        </Box>
      ),
      dataIndex: "title",
      key: "title",
      render: (text) => <span>{text.slice(0, 50)}</span>,
    },
    {
      title: () => (
        <Box>
          <Text className="block text-center">Body</Text>
          <TextFilter filterName="body" onFilterChange={props.onFilterChange} />
        </Box>
      ),
      dataIndex: "body",
      key: "body",
      render: (text) => <span>{text.slice(0, 50)}</span>,
    },
  ];
};
