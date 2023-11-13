"use client";

import dynamic from "next/dynamic";

const Row = dynamic(() => import("antd/lib/grid/row"));
const Col = dynamic(() => import("antd/lib/grid/col"));

export { Row, Col };
