"use client";

import React from "react";
import { AffixProps as AntdAffixProps } from "antd/lib/affix";
import dynamic from "next/dynamic";

const AntdAffix = dynamic(() => import("antd/lib/affix"));

const Affix: React.FC<AntdAffixProps> = (props) => {
  return <AntdAffix {...props} />;
};

export type AffixProps = AntdAffixProps;

export default Affix;
