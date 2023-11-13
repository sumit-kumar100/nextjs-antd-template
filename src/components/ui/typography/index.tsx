"use client";

import dynamic from "next/dynamic";

const Text = dynamic(() =>
  import("antd/lib/typography").then((module) => module.default.Text),
);

const Title = dynamic(() =>
  import("antd/lib/typography").then((module) => module.default.Title),
);

const Paragraph = dynamic(() =>
  import("antd/lib/typography").then((module) => module.default.Paragraph),
);

export { Text, Title, Paragraph };
