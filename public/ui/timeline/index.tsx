"use client";

import React from "react";
import { TimelineProps as AntdTimelineProps } from "antd/lib/timeline";
import dynamic from "next/dynamic";

const AntdTimeline = dynamic(() => import("antd/lib/timeline"));

const Timeline: React.FC<AntdTimelineProps> = (props) => {
  return <AntdTimeline {...props} />;
};

export type TimeLineProps = AntdTimelineProps;

export default Timeline;
