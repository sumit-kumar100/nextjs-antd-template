"use client";

import dynamic from "next/dynamic";

const Layout = dynamic(() => import("antd/lib/layout"));

const Header = dynamic(() =>
  import("antd/lib/layout").then((module) => module.default.Header),
);

const Footer = dynamic(() =>
  import("antd/lib/layout").then((module) => module.default.Footer),
);

const Sider = dynamic(() =>
  import("antd/lib/layout").then((module) => module.default.Sider),
);

const Content = dynamic(() =>
  import("antd/lib/layout").then((module) => module.default.Content),
);

export { Header, Footer, Sider, Content };

export default Layout;
