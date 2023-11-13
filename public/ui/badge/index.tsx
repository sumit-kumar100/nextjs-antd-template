"use client";

import React from "react";
import { BadgeProps as AntdBadgeProps } from "antd/lib/badge";
import dynamic from "next/dynamic";

const AntdBadge = dynamic(() => import("antd/lib/badge"));

const Badge: React.FC<AntdBadgeProps> = (props) => {
  return <AntdBadge {...props} />;
};

export type BadgeProps = AntdBadgeProps;

export default Badge;
