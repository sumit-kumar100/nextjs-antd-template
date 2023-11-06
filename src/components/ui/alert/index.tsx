"use client";

import React from "react";
import { AlertProps as AntdAlertProps } from "antd/lib/alert";
import dynamic from "next/dynamic";

const AntdAlert = dynamic(() => import("antd/lib/alert"));

const Alert: React.FC<AntdAlertProps> = (props) => {
  return <AntdAlert {...props} />;
};

export type AlertProps = AntdAlertProps;

export default Alert;
