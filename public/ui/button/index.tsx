"use client";

import React from "react";
import { ButtonProps as AntdButtonProps } from "antd/lib/button";
import dynamic from "next/dynamic";

const AntdButton = dynamic(() => import("antd/lib/button"));

const Button: React.FC<AntdButtonProps> = (props) => {
  return <AntdButton {...props} />;
};

export type ButtonProps = AntdButtonProps;

export default Button;
