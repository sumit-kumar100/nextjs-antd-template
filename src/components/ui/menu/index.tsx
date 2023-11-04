"use client";

import React from "react";
import { MenuProps as AntdMenuProps } from "antd/lib/menu";
import dynamic from "next/dynamic";

const AntdMenu = dynamic(() => import("antd/lib/menu"));

const Menu: React.FC<AntdMenuProps> = (props) => {
  return <AntdMenu {...props} />;
};

export type MenuProps = AntdMenuProps;

export default Menu;
