"use client";

import React from "react";
import { StatisticProps as AntdStatisticProps } from "antd/lib/statistic";
import dynamic from "next/dynamic";

const AntdStatistic = dynamic(() => import("antd/lib/statistic"));

const Statistic: React.FC<AntdStatisticProps> = (props) => {
  return <AntdStatistic {...props} />;
};

export type StatisticProps = AntdStatisticProps;

export default Statistic;
