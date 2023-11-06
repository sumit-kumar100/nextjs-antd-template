"use client";

import React from "react";
import { FloatButtonProps as AntdFloatButtonProps } from "antd/lib";
import dynamic from "next/dynamic";

const AntdFloatButton = dynamic(() => import("antd/lib/float-button"));

const FloatButton: React.FC<AntdFloatButtonProps> = (props) => {
  return <AntdFloatButton {...props} />;
};

export type FloatButtonProps = AntdFloatButtonProps;

export default FloatButton;
