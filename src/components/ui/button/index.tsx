"use client";

import dynamic from "next/dynamic";

const Button = dynamic(() => import("antd/lib/button"));

export default Button;
