"use client";

import React from "react";
import { DescriptionsProps as AntdDescriptionsProps } from "antd/lib/descriptions";
import dynamic from "next/dynamic";

const AntdDescription = dynamic(() => import("antd/lib/descriptions"));

const Descriptions: React.FC<AntdDescriptionsProps> = (props) => {
  return <AntdDescription {...props} />;
};

export type DescriptionsProps = AntdDescriptionsProps;

export default Descriptions;
