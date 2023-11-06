"use client";

import React from "react";
import { AvatarProps as AntdAvatarProps } from "antd/lib/avatar";
import dynamic from "next/dynamic";

const AntdAvatar = dynamic(() => import("antd/lib/avatar"));

const Avatar: React.FC<AntdAvatarProps> = (props) => {
  return <AntdAvatar {...props} />;
};

export type AvatarProps = AntdAvatarProps;

export default Avatar;
