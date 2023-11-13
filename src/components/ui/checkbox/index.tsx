"use client";

import dynamic from "next/dynamic";

const Checkbox = dynamic(() => import("antd/lib/checkbox"));

export default Checkbox;
