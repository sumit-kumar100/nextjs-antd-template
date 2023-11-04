"use client";

import React from "react";
import { AnchorLinkProps as AntdAnchorLinkProps } from "antd/lib/anchor";
import dynamic from "next/dynamic";

const AntdAnchor = dynamic(() => import("antd/lib/anchor"));

const Anchor: React.FC<AntdAnchorLinkProps> = (props) => {
  return <AntdAnchor {...props} />;
};

export type AnchorProps = AntdAnchorLinkProps;

export default Anchor;
