"use client";

import React from "react";
import { InputProps as AntdInputProps } from "antd/lib/input";
import dynamic from "next/dynamic";

const AntdInput = dynamic(() => import("antd/lib/input"));

const Input: React.FC<AntdInputProps> = (props) => {
  return <AntdInput {...props} />;
};

export type InputProps = AntdInputProps;

export default Input;
