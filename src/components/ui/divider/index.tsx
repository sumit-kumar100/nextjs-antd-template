"use client";

import React from "react";
import { DividerProps } from "antd/lib/divider";
import dynamic from "next/dynamic";

const AntdDivider = dynamic(() => import("antd/lib/divider"));

const Divider: React.FC<DividerProps> = (props) => {
  return <AntdDivider {...props} />;
};

export default Divider;
