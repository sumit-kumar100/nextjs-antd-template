"use client";

import dynamic from "next/dynamic";

const Tooltip = dynamic(() => import("antd/lib/tooltip"));

export default Tooltip;
