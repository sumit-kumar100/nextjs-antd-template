"use client";

import dynamic from "next/dynamic";

const TreeSelect = dynamic(() => import("antd/lib/tree-select"));

export default TreeSelect;
