"use client";

import React from "react";
import { BreadcrumbProps as AntdBreadcrumbProps } from "antd/lib/breadcrumb";
import dynamic from "next/dynamic";

const AntdBreadcrumb = dynamic(() => import("antd/lib/breadcrumb"));

const Breadcrumb: React.FC<AntdBreadcrumbProps> = (props) => {
  return <AntdBreadcrumb {...props} />;
};

export type BreadcrumbProps = AntdBreadcrumbProps;

export default Breadcrumb;
