"use client";

import React from "react";
import { TourProps as AntdTourProps } from "antd/lib";
import dynamic from "next/dynamic";

const AntdTour = dynamic(() => import("antd/lib/tour"));

const Tour: React.FC<AntdTourProps> = (props) => {
  return <AntdTour {...props} />;
};

export type TourProps = AntdTourProps;

export default Tour;
