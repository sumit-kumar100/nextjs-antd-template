"use client";

import React from "react";
import {
  RowProps as AntdRowProps,
  ColProps as AntdColProps,
} from "antd/lib/grid";
import dynamic from "next/dynamic";

const AntdGridRow = dynamic(() => import("antd/lib/grid/row"));
const AntdGridCol = dynamic(() => import("antd/lib/grid/col"));

const Row: React.FC<AntdRowProps> = (props) => {
  return <AntdGridRow {...props} />;
};

const Col: React.FC<AntdColProps> = (props) => {
  return <AntdGridCol {...props} />;
};

export type RowProps = AntdRowProps;

export type ColProps = AntdColProps;

export { Row, Col };
