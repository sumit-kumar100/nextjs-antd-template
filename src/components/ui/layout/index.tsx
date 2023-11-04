"use client";

import React from "react";
import { BasicProps as AntdBasicProps } from "antd/lib/layout/layout";
import dynamic from "next/dynamic";

const AntdHeader = dynamic(() =>
  import("antd/lib/layout").then((module) => module.default.Header),
);

const AntdFooter = dynamic(() =>
  import("antd/lib/layout").then((module) => module.default.Footer),
);

const AntdSider = dynamic(() =>
  import("antd/lib/layout").then((module) => module.default.Sider),
);

const AntdContent = dynamic(() =>
  import("antd/lib/layout").then((module) => module.default.Content),
);

const Header: React.FC<AntdBasicProps> = (props) => {
  return <AntdHeader {...props} />;
};

const Footer: React.FC<AntdBasicProps> = (props) => {
  return <AntdFooter {...props} />;
};

const Sider: React.FC<AntdBasicProps> = (props) => {
  return <AntdSider {...props} />;
};

const Content: React.FC<AntdBasicProps> = (props) => {
  return <AntdContent {...props} />;
};

export type BasicProps = AntdBasicProps;

export { Header, Footer, Sider, Content };
