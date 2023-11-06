"use client";

import React from "react";
import { CascaderProps as AntdCascaderProps } from "antd/lib/cascader";
import dynamic from "next/dynamic";

const AntdCascader = dynamic(() => import("antd/lib/cascader"));

const Cascader: React.FC<AntdCascaderProps> = (props) => {
  return <AntdCascader {...props} />;
};

export type CascaderProps = AntdCascaderProps;

export default Cascader;
