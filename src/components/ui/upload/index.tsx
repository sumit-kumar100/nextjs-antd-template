"use client";

import dynamic from "next/dynamic";

const Upload = dynamic(() => import("antd/lib/upload"));

export default Upload;
