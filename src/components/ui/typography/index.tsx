"use client";

import React from "react";

import { TextProps } from "antd/lib/typography/Text";
import { TitleProps } from "antd/lib/typography/Title";
import { ParagraphProps } from "antd/lib/typography/Paragraph";
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

const Text: React.FC<TextProps> = (props) => {
  return <AntdText {...props} />;
};

const Title: React.FC<TitleProps> = (props) => {
  return <AntdTitle {...props} />;
};

const Paragraph: React.FC<ParagraphProps> = (props) => {
  return <AntdParagraph {...props} />;
};

export { Text, Title, Paragraph };
