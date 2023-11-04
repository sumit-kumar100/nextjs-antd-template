"use client";

import React from "react";
import { InputProps } from "antd/lib/input";
import dynamic from "next/dynamic";

const AntdInput = dynamic(() => import("antd/lib/input"));

const Input: React.FC<InputProps> = (props) => {
  return <AntdInput {...props} />;
};

export default Input;
