"use client";

import React from "react";
import { FlexProps } from "antd/lib/flex/interface";
import dynamic from "next/dynamic";

const AntdFlex = dynamic(() => import("antd/lib/flex"));

const Flex: React.FC<FlexProps> = (props) => {
  return <AntdFlex {...props} />;
};

export default Flex;
