"use client";

import React from "react";
import { EmptyProps as AntdEmptyProps } from "antd/lib/empty";
import dynamic from "next/dynamic";

const AntdEmpty = dynamic(() => import("antd/lib/empty"));

const Empty: React.FC<AntdEmptyProps> = (props) => {
  return <AntdEmpty {...props} />;
};

export type EmptyProps = AntdEmptyProps;

export default Empty;
