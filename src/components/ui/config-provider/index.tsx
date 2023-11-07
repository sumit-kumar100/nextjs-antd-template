"use client";

import React from "react";
import theme from "antd/lib/theme";
import { ConfigProviderProps as AntdConfigProviderProps } from "antd/lib/config-provider";
import dynamic from "next/dynamic";

const AntdConfigProvider = dynamic(() => import("antd/lib/config-provider"));

const ConfigProvider: React.FC<AntdConfigProviderProps> = (props) => {
  return <AntdConfigProvider {...props} />;
};

export type ConfigProviderProps = AntdConfigProviderProps;

export default ConfigProvider;

export { theme };
