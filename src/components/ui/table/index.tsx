"use client";

import dynamic from "next/dynamic";
import type { ColumnsType } from "antd/es/table";

const Table = dynamic(() => import("antd/lib/table"));

export default Table;
