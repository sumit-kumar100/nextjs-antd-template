"use client";

import React from "react";
import { RadioProps as AntdRadioProps } from "antd/lib/radio";
import dynamic from "next/dynamic";

const AntdRadio = dynamic(() => import("antd/lib/radio"));

const Radio: React.FC<AntdRadioProps> = (props) => {
  return <AntdRadio {...props} />;
};

export type RadioProps = AntdRadioProps;

export default Radio;
