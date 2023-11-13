"use client";

import dynamic from "next/dynamic";

const Popconfirm = dynamic(() => import("antd/lib/popconfirm"));

export default Popconfirm;
