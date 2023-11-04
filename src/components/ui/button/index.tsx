"use client";

import React from "react";
import { ButtonProps } from "antd/lib/button";
import dynamic from "next/dynamic";

const AntdButton = dynamic(() => import("antd/lib/button"));

const Button: React.FC<ButtonProps> = (props) => {
  return <AntdButton {...props} />;
};

export default Button;
