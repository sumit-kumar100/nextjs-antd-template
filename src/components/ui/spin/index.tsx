"use client";

import dynamic from "next/dynamic";
import { CustomSpinProps } from "./custom-spin";

const Spin = dynamic(() => import("antd/lib/spin"));

const CustomSpin = dynamic(() => import("./custom-spin"));

export { Spin, CustomSpin };

export type { CustomSpinProps };
