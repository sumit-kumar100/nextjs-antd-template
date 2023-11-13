"use client";

import dynamic from "next/dynamic";

const Mention = dynamic(() => import("antd/lib/mentions"));

export default Mention;
