"use client";

import dynamic from "next/dynamic";

const Breadcrumb = dynamic(() => import("antd/lib/breadcrumb"));

export default Breadcrumb;
