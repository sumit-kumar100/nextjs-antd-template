"use client";

import React from "react";
import { ResultProps as AntdResultProps } from "antd/lib/result";
import dynamic from "next/dynamic";

const AntdResult = dynamic(() => import("antd/lib/result"));

const Result: React.FC<AntdResultProps> = (props) => {
  return <AntdResult {...props} />;
};

export type ResultProps = AntdResultProps;

export default Result;
