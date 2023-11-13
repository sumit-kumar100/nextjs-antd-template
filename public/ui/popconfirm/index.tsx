"use client";

import React from "react";
import { PopconfirmProps as AntdPopconfirmProps } from "antd/lib/popconfirm";
import dynamic from "next/dynamic";

const AntdPopconfirm = dynamic(() => import("antd/lib/popconfirm"));

const Popconfirm: React.FC<AntdPopconfirmProps> = (props) => {
  return <AntdPopconfirm {...props} />;
};

export type PopconfirmProps = AntdPopconfirmProps;

export default Popconfirm;
