"use client";

import React from "react";
import { ListProps as AntdListProps } from "antd/lib/list";
import dynamic from "next/dynamic";

const AntdList = dynamic(() => import("antd/lib/list"));

const List: React.FC<AntdListProps<any>> = (props) => {
  return <AntdList {...(props as any)} />;
};

export type ListProps = AntdListProps<any>;

export default List;
