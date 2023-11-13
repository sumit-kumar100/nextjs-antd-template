"use client";

import dynamic from "next/dynamic";
import { BoxProps } from "./box";

const Box = dynamic(() => import("./box"));

export default Box;

export type { BoxProps };
