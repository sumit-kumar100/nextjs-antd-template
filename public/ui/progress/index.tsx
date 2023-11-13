"use client";

import React from "react";
import { ProgressProps as AntdProgressProps } from "antd/lib/progress";
import dynamic from "next/dynamic";

const AntdProgress = dynamic(() => import("antd/lib/progress"));

const Progress: React.FC<AntdProgressProps> = (props) => {
  return <AntdProgress {...props} />;
};

export type ProgressProps = AntdProgressProps;

export default Progress;
