"use client";

import dynamic from "next/dynamic";

const Avatar = dynamic(() => import("antd/lib/avatar"));

export default Avatar;
