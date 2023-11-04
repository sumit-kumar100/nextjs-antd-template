"use client";
import React from "react";

export interface AntdBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const Box: React.FC<AntdBoxProps> = (props) => {
  return <div {...props} />;
};

export type BoxProps = AntdBoxProps;

export default Box;
