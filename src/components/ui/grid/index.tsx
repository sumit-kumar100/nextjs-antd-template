"use client";

import React from "react";
import { RowProps, ColProps } from "antd/lib/grid";
import dynamic from "next/dynamic";

const AntdGridRow = dynamic(() => import("antd/lib/grid/row"));
const AntdGridCol = dynamic(() => import("antd/lib/grid/col"));

const Row: React.FC<RowProps> = (props) => {
  return <AntdGridRow {...props} />;
};

const Col: React.FC<ColProps> = (props) => {
  return <AntdGridCol {...props} />;
};

export { Row, Col };
