"use client";

import React from "react";
import { SpaceProps as AntdSpaceProps } from "antd/lib/space";
import dynamic from "next/dynamic";

const AntdSpace = dynamic(() => import("antd/lib/space"));

const Space: React.FC<AntdSpaceProps> = (props) => {
  return <AntdSpace {...props} />;
};

export type SpaceProps = AntdSpaceProps;

export default Space;
