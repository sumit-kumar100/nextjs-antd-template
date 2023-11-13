"use client";

import dynamic from "next/dynamic";

const Steps = dynamic(() => import("antd/lib/steps"));

export default Steps;
