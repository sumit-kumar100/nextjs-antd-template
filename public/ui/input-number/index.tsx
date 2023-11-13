"use client";

import React from "react";
import { InputNumberProps as AntdInputNumberProps } from "antd/lib/input-number";
import dynamic from "next/dynamic";

const AntdInputNumber = dynamic(() => import("antd/lib/input-number"));

const InputNumber: React.FC<AntdInputNumberProps> = (props) => {
  return <AntdInputNumber {...props} />;
};

export type InputNumberProps = AntdInputNumberProps;

export default InputNumber;
