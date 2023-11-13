"use client";

import React from "react";

import { TextProps as AntdTextProps } from "antd/lib/typography/Text";
import { TitleProps as AntdTitleProps } from "antd/lib/typography/Title";
import { ParagraphProps as AntdParagraphProps } from "antd/lib/typography/Paragraph";
import dynamic from "next/dynamic";

const AntdText = dynamic(() =>
  import("antd/lib/typography").then((module) => module.default.Text),
);

const AntdTitle = dynamic(() =>
  import("antd/lib/typography").then((module) => module.default.Title),
);

const AntdParagraph = dynamic(() =>
  import("antd/lib/typography").then((module) => module.default.Paragraph),
);

const Text: React.FC<AntdTextProps> = (props) => {
  return <AntdText {...props} />;
};

const Title: React.FC<AntdTitleProps> = (props) => {
  return <AntdTitle {...props} />;
};

const Paragraph: React.FC<AntdParagraphProps> = (props) => {
  return <AntdParagraph {...props} />;
};

export type TextProps = AntdTextProps;

export type TitleProps = AntdTitleProps;

export type ParagraphProps = AntdParagraphProps;

export { Text, Title, Paragraph };
