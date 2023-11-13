"use client";

import dynamic from "next/dynamic";

const Skeleton = dynamic(() => import("antd/lib/skeleton"));

export default Skeleton;
