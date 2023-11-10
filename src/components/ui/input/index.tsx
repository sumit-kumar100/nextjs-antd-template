"use client";

import React from "react";
import { InputProps as AntdInputProps } from "antd/lib/input";
import dynamic from "next/dynamic";

const AntdInput = dynamic(() => import("antd/lib/input"));

const AntdInputPassword = dynamic(() =>
  import("antd/lib/input").then((module) => module.default.Password),
);

const Input: React.FC<AntdInputProps> = (props) => {
  return <AntdInput {...props} />;
};

const InputPassword: React.FC<AntdInputProps> = (props) => {
  return <AntdInputPassword {...props} />;
};

export type InputProps = AntdInputProps;

export default Input;

export { InputPassword };
