"use client";

import React from "react";

import { AppProps as AntdAppProps } from "antd/lib/app";
import dynamic from "next/dynamic";

const AntdApp = dynamic(() => import("antd/lib/app"));

const App: React.FC<AntdAppProps> = (props) => {
  return <AntdApp {...props} />;
};

export type AppProps = AntdAppProps;

export default App;
