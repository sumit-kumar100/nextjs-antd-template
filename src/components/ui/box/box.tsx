"use client";

export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

const Box: React.FC<BoxProps> = (props) => {
  return <div {...props} />;
};

export default Box;
