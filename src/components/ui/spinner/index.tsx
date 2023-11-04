"use client";

import React from "react";

interface AntdSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const loaderStyles = (
  <style>
    {`
      .loader-container {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 900;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.6);
      }

      .loader {
        border: 4px solid #2e7d32;
        border-top: 4px solid #f3f3f3;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    `}
  </style>
);

const Spinner: React.FC<AntdSpinnerProps> = (props) => {
  return (
    <div {...props} className="loader-container">
      <div className="loader">{loaderStyles}</div>
    </div>
  );
};

export type SpinnerProps = AntdSpinnerProps;

export default Spinner;
