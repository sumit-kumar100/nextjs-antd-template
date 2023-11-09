"use client";

import React from "react"
import DataTable, { useDataTable } from "@/components/data-table";
import { fetchPosts } from "./fetch-posts";
import { useQuery } from "@tanstack/react-query";
import { getColumns } from "./columns";
import { Box, Text, Flex, Form, Input, FormItem } from "@/components/ui";
import useForm from "@/components/ui/form/useForm";

export default function TanstackExamplePosts() {

  const x = useForm()

  console.log(x)

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
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,

        }}
        autoComplete="off"
      >
        <FormItem
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input />
        </FormItem>
      </Form>
    </Box>
  );
}
