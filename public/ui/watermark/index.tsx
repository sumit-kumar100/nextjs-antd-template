"use client";

import React from "react";
import { WatermarkProps as AntdWatermarkProps } from "antd/lib/watermark";
import dynamic from "next/dynamic";

const AntdWatermark = dynamic(() => import("antd/lib/watermark"));

const Watermark: React.FC<AntdWatermarkProps> = (props) => {
  return <AntdWatermark {...props} />;
};

export type WatermarkProps = AntdWatermarkProps;

export default Watermark;
