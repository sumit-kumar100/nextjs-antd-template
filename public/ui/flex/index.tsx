"use client";

import React from "react";
import { FlexProps as AntdFlexProps } from "antd/lib";
import dynamic from "next/dynamic";

const AntdFlex = dynamic(() => import("antd/lib/flex"));

const Flex: React.FC<AntdFlexProps> = (props) => {
  return <AntdFlex {...props} />;
};

export type FlexProps = AntdFlexProps;

export default Flex;
