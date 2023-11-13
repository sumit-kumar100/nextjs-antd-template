"use client";

import dynamic from "next/dynamic";

const Popover = dynamic(() => import("antd/lib/popover"));

export default Popover;
