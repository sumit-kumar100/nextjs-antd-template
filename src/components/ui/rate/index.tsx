"use client";

import React from "react";
import { RateProps as AntdRateProps } from "antd/lib/rate";
import dynamic from "next/dynamic";

const AntdRate = dynamic(() => import("antd/lib/rate"));

const Rate: React.FC<AntdRateProps> = (props) => {
  return <AntdRate {...props} />;
};

export type RateProps = AntdRateProps;

export default Rate;
