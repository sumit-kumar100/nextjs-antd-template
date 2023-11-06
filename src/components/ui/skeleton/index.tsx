"use client";

import React from "react";
import { SkeletonProps as AntdSkeletonProps } from "antd/lib/skeleton";
import dynamic from "next/dynamic";

const AntdSkeleton = dynamic(() => import("antd/lib/skeleton"));

const Skeleton: React.FC<AntdSkeletonProps> = (props) => {
  return <AntdSkeleton {...props} />;
};

export type SkeletonProps = AntdSkeletonProps;

export default Skeleton;
