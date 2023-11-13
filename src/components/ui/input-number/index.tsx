"use client";

import dynamic from "next/dynamic";

const InputNumber = dynamic(() => import("antd/lib/input-number"));

export default InputNumber;
