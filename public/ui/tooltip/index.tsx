"use client";

import React from "react";
import { TooltipProps as AntdTooltipProps } from "antd/lib/tooltip";
import dynamic from "next/dynamic";

const AntdTooltip = dynamic(() => import("antd/lib/tooltip"));

const Tooltip: React.FC<AntdTooltipProps> = (props) => {
  return <AntdTooltip {...props} />;
};

export type TooltipProps = AntdTooltipProps;

export default Tooltip;
