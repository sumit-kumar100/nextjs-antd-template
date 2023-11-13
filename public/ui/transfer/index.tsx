"use client";

import React from "react";
import { TransferProps as AntdTransferProps } from "antd/lib/transfer";
import dynamic from "next/dynamic";

const AntdTransfer = dynamic(() => import("antd/lib/transfer"));

const Transfer: React.FC<AntdTransferProps<any>> = (props) => {
  return <AntdTransfer {...props} />;
};

export type TransferProps = AntdTransferProps<any>;

export default Transfer;
