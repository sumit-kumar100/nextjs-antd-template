"use client";

import dynamic from "next/dynamic";

const Accordion = dynamic(() => import("antd/lib/collapse"));

export default Accordion;
