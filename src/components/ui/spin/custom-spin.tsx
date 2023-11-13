"use client";

export type CustomSpinProps = React.HTMLAttributes<HTMLDivElement>;

const CustomSpin: React.FC<CustomSpinProps> = (props) => {
  return (
    <div {...props} className="loader-container">
      <div className="loader">{""}</div>
    </div>
  );
};

export default CustomSpin;
