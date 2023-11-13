"use client";

import dynamic from "next/dynamic";

const Progress = dynamic(() => import("antd/lib/progress"));

export default Progress;
