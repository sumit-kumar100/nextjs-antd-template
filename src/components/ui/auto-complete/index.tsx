"use client";

import dynamic from "next/dynamic";

const AutoComplete = dynamic(() => import("antd/lib/auto-complete"));

export default AutoComplete;
