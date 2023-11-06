"use client";

import React from "react";
import { SwitchProps as AntdSwitchProps } from "antd/lib/switch";
import dynamic from "next/dynamic";

const AntdSwitch = dynamic(() => import("antd/lib/switch"));

const Switch: React.FC<AntdSwitchProps> = (props) => {
  return <AntdSwitch {...props} />;
};

export type SwitchProps = AntdSwitchProps;

export default Switch;
