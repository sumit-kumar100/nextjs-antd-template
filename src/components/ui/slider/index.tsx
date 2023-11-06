"use client";

import React from "react";
import { SliderBaseProps as AntdSliderBaseProps } from "antd/lib/slider";
import dynamic from "next/dynamic";

const AntdSlider = dynamic(() => import("antd/lib/slider"));

const Slider: React.FC<AntdSliderBaseProps> = (props) => {
  return <AntdSlider {...props} />;
};

export type SliderProps = AntdSliderBaseProps;

export default Slider;
