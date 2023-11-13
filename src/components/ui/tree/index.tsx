"use client";

import dynamic from "next/dynamic";

const Tree = dynamic(() => import("antd/lib/tree"));

export default Tree;
