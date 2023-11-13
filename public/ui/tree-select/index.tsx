"use client";

import React from "react";
import { TreeSelectProps as AntdTreeSelectProps } from "antd/lib/tree-select";
import dynamic from "next/dynamic";

const AntdTreeSelect = dynamic(() => import("antd/lib/tree-select"));

const TreeSelect: React.FC<AntdTreeSelectProps> = (props) => {
  return <AntdTreeSelect {...props} />;
};

export type TreeSelectProps = AntdTreeSelectProps;

export default TreeSelect;
