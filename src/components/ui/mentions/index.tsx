"use client";

import React from "react";
import { MentionProps as AntdMentionProps } from "antd/lib/mentions";
import dynamic from "next/dynamic";

const AntdMention = dynamic(() => import("antd/lib/mentions"));

const Mention: React.FC<AntdMentionProps> = (props) => {
  return <AntdMention {...props} />;
};

export type MentionProps = AntdMentionProps;

export default Mention;
