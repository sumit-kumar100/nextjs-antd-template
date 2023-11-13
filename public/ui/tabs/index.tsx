"use client";

import React from "react";
import { TabsProps as AntdTabsProps } from "antd/lib/tabs";
import dynamic from "next/dynamic";

const AntdTabs = dynamic(() => import("antd/lib/tabs"));

const Tabs: React.FC<AntdTabsProps> = (props) => {
  return <AntdTabs {...props} />;
};

export type TabsProps = AntdTabsProps;

export default Tabs;
