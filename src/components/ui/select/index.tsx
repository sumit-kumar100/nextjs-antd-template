"use client";

import dynamic from "next/dynamic";

const Select = dynamic(() => import("antd/lib/select"));

export default Select;
