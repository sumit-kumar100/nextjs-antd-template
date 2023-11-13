"use client";

import React from "react";
import { PopoverProps as AntdPopoverProps } from "antd/lib/popover";
import dynamic from "next/dynamic";

const AntdPopover = dynamic(() => import("antd/lib/popover"));

const Popover: React.FC<AntdPopoverProps> = (props) => {
  return <AntdPopover {...props} />;
};

export type PopoverProps = AntdPopoverProps;

export default Popover;
