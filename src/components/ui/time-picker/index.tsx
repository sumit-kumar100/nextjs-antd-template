"use client";

import dynamic from "next/dynamic";

const TimePicker = dynamic(() => import("antd/lib/time-picker"));

export default TimePicker;
