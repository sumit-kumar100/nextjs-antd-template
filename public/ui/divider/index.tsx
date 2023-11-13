"use client";

import React from "react";
import { DividerProps as AntdDividerProps } from "antd/lib/divider";
import dynamic from "next/dynamic";

const AntdDivider = dynamic(() => import("antd/lib/divider"));

const Divider: React.FC<AntdDividerProps> = (props) => {
  return <AntdDivider {...props} />;
};

export type DividerProps = AntdDividerProps;

export default Divider;
