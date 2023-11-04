"use client";

import React from "react";
import { AnchorLinkProps } from "antd/lib/anchor";
import dynamic from "next/dynamic";

const AntdAnchor = dynamic(() => import("antd/lib/anchor"));

const Anchor: React.FC<AnchorLinkProps> = (props) => {
  return <AntdAnchor {...props} />;
};

export default Anchor;
