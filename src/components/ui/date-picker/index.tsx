"use client";

import dynamic from "next/dynamic";

const DatePicker = dynamic(() => import("antd/lib/date-picker"));

const DateRangePicker = dynamic(() =>
  import("antd/lib/date-picker").then((module) => module.default.RangePicker),
);

export { DatePicker, DateRangePicker };
