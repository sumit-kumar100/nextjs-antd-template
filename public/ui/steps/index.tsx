"use client";

import React from "react";
import { StepsProps as AntdStepsProps } from "antd/lib/steps";
import dynamic from "next/dynamic";

const AntdSteps = dynamic(() => import("antd/lib/steps"));

const Steps: React.FC<StepsProps> = (props) => {
  return <AntdSteps {...props} />;
};

export type StepsProps = AntdStepsProps;

export default Steps;
