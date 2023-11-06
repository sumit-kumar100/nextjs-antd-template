"use client";

import React from "react";
import { DrawerProps as AntdDrawerProps } from "antd/lib/drawer";
import dynamic from "next/dynamic";

const AntdDrawer = dynamic(() => import("antd/lib/drawer"));

const Drawer: React.FC<AntdDrawerProps> = (props) => {
  return <AntdDrawer {...props} />;
};

export type DrawerProps = AntdDrawerProps;

export default Drawer;
