"use client";

import dynamic from "next/dynamic";

const Pagination = dynamic(() => import("antd/lib/pagination"));

export default Pagination;
