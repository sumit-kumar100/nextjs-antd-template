"use client";

import React from "react";
import { SegmentedProps as AntdSegmentedProps } from "antd/lib/segmented";
import dynamic from "next/dynamic";

const AntdSegmented = dynamic(() => import("antd/lib/segmented"));

const Segmented: React.FC<AntdSegmentedProps> = (props) => {
  return <AntdSegmented {...(props as any)} />;
};

export type SegmentedProps = AntdSegmentedProps;

export default Segmented;
