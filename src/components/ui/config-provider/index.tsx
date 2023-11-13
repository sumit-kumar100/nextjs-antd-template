"use client";

import dynamic from "next/dynamic";

const ConfigProvider = dynamic(() => import("antd/lib/config-provider"));

export default ConfigProvider;
