"use client";

import dynamic from "next/dynamic";

const ColorPicker = dynamic(() => import("antd/lib/color-picker"));

export default ColorPicker;
