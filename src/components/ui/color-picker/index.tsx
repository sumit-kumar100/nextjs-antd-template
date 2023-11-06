"use client";

import React from "react";
import { ColorPickerProps as AntdColorPickerProps } from "antd/lib/color-picker";
import dynamic from "next/dynamic";

const AntdColorPicker = dynamic(() => import("antd/lib/color-picker"));

const ColorPicker: React.FC<AntdColorPickerProps> = (props) => {
  return <AntdColorPicker {...props} />;
};

export type ColorPickerProps = AntdColorPickerProps;

export default ColorPicker;
