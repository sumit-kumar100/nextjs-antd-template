"use client";

import dynamic from "next/dynamic";

const Statistic = dynamic(() => import("antd/lib/statistic"));

export default Statistic;
