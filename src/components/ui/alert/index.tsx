"use client";

import dynamic from "next/dynamic";

const Alert = dynamic(() => import("antd/lib/alert"));

export default Alert;
