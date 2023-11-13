"use client";

import React from "react";
import { CheckboxProps as AntdCheckboxProps } from "antd/lib/checkbox";
import dynamic from "next/dynamic";

const AntdCheckBox = dynamic(() => import("antd/lib/checkbox"));

const Checkbox: React.FC<AntdCheckboxProps> = (props) => {
  return <AntdCheckBox {...props} />;
};

export type CheckboxProps = AntdCheckboxProps;

export default Checkbox;
