"use client";

import dynamic from "next/dynamic";

const Card = dynamic(() => import("antd/lib/card"));

const CardMeta = dynamic(() =>
  import("antd/lib/card").then((module) => module.default.Meta),
);

export { CardMeta };

export default Card;
