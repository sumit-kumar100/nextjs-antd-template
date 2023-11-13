"use client";

import dynamic from "next/dynamic";

const Tag = dynamic(() => import("antd/lib/tag"));

export default Tag;
