"use client";

import dynamic from "next/dynamic";

const Image = dynamic(() => import("antd/lib/image"));

const PreviewGroup = dynamic(() =>
  import("antd/lib/image").then((module) => module.default.PreviewGroup),
);

export default Image;

export { PreviewGroup };
