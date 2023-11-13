"use client";

import dynamic from "next/dynamic";

const Tour = dynamic(() => import("antd/lib/tour"));

export default Tour;
