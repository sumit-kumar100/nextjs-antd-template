"use client";

import React from "react";
import { UploadProps as AntdUploadProps } from "antd/lib/upload";
import dynamic from "next/dynamic";

const AntdUpload = dynamic(() => import("antd/lib/upload"));

const Upload: React.FC<AntdUploadProps> = (props) => {
  return <AntdUpload {...props} />;
};

export type UploadProps = AntdUploadProps;

export default Upload;
