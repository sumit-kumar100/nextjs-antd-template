"use client";

import dynamic from "next/dynamic";

const Rate = dynamic(() => import("antd/lib/rate"));

export default Rate;
