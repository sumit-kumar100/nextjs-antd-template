"use client";

import React from "react";
import { TreeProps as AntdTreeProps } from "antd/lib/tree";
import dynamic from "next/dynamic";

const AntdTree = dynamic(() => import("antd/lib/tree"));

const Tree: React.FC<AntdTreeProps> = (props) => {
  return <AntdTree {...(props as any)} />;
};

export type TreeProps = AntdTreeProps;

export default Tree;
