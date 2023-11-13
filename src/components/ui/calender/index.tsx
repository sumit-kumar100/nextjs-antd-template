"use client";

import dynamic from "next/dynamic";

const Calendar = dynamic(() => import("antd/lib/calendar"));

export default Calendar;
