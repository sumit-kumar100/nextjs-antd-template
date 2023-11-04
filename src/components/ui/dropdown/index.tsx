"use client";

import React from "react";
import { DropDownProps as AntdDropDownProps } from "antd/lib/dropdown";
import dynamic from "next/dynamic";

const AntdDropDown = dynamic(() => import("antd/lib/dropdown"));

const DropDown: React.FC<AntdDropDownProps> = (props) => {
  return <AntdDropDown {...props} />;
};

export type DropDownProps = AntdDropDownProps;

export default DropDown;
