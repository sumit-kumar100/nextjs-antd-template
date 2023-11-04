"use client";

import React from "react";
import { SpaceProps } from "antd/lib/space";
import dynamic from "next/dynamic";

const AntdSpace = dynamic(() => import("antd/lib/space"));

const Space: React.FC<SpaceProps> = (props) => {
  return <AntdSpace {...props} />;
};

export default Space;
