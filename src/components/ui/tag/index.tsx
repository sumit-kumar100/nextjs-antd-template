"use client";

import React from "react";
import { TagProps as AntdTagProps } from "antd/lib/tag";
import dynamic from "next/dynamic";

const AntdTag = dynamic(() => import("antd/lib/tag"));

const Tag: React.FC<AntdTagProps> = (props) => {
  return <AntdTag {...props} />;
};

export type TagProps = AntdTagProps;

export default Tag;
