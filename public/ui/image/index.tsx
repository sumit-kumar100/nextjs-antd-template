"use client";

import React from "react";
import { ImageProps as AntdImageProps } from "antd/lib/image";
import dynamic from "next/dynamic";

const AntdImage = dynamic(() => import("antd/lib/image"));

const AntdPreviewGroup = dynamic(() =>
  import("antd/lib/image").then((module) => module.default.PreviewGroup),
);

const Image: React.FC<AntdImageProps> = (props) => {
  return <AntdImage {...props} />;
};

const PreviewGroup: React.FC<any> = (props) => {
  return <AntdPreviewGroup {...props} />;
};

export type ImageProps = AntdImageProps;

export type PreviewGroupProps = any;

export default Image;

export { PreviewGroup };
