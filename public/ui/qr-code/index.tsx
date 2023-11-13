"use client";

import React from "react";
import { QRCodeProps as AntdQRCodeProps } from "antd/lib";
import dynamic from "next/dynamic";

const AntdQRCode = dynamic(() => import("antd/lib/qr-code"));

const QRCode: React.FC<AntdQRCodeProps> = (props) => {
  return <AntdQRCode {...props} />;
};

export type QRCodeProps = AntdQRCodeProps;

export default QRCode;
