"use client";

import dynamic from "next/dynamic";

const Watermark = dynamic(() => import("antd/lib/watermark"));

export default Watermark;
