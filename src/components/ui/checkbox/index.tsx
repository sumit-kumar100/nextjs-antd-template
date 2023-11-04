"use client";

import React from "react";
import { CheckboxProps } from "antd/lib/checkbox";
import dynamic from "next/dynamic";

const AntdCheckBox = dynamic(() => import("antd/lib/checkbox"));

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <AntdCheckBox {...props} />;
};

export default Checkbox;
