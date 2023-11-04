"use client";
import React from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const Box: React.FC<BoxProps> = (props) => {
  return <div {...props} />;
};

export default Box;
