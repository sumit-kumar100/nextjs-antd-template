"use client";

import React from "react";
import {
  CardProps as AntdCardProps,
  CardMetaProps as AntdCardMetaPros,
} from "antd/lib/card";
import dynamic from "next/dynamic";

const AntdCard = dynamic(() => import("antd/lib/card"));

const AntdCardMeta = dynamic(() =>
  import("antd/lib/card").then((module) => module.default.Meta),
);

const Card: React.FC<AntdCardProps> = (props) => {
  return <AntdCard {...props} />;
};

const CardMeta: React.FC<AntdCardMetaPros> = (props) => {
  return <AntdCardMeta {...props} />;
};

export type CardMetaProps = AntdCardMetaPros;

export type CardProps = AntdCardProps;

export { CardMeta };

export default Card;
