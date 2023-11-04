"use client";

import React from "react";
import { BasicProps } from "antd/lib/layout/layout";
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

const Header: React.FC<BasicProps> = (props) => {
  return <AntdHeader {...props} />;
};

const Footer: React.FC<BasicProps> = (props) => {
  return <AntdFooter {...props} />;
};

const Sider: React.FC<BasicProps> = (props) => {
  return <AntdSider {...props} />;
};

const Content: React.FC<BasicProps> = (props) => {
  return <AntdContent {...props} />;
};

export { Header, Footer, Sider, Content };
