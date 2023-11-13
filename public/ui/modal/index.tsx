"use client";

import React from "react";
import { ModalProps as AntdModalProps } from "antd/lib/modal";
import dynamic from "next/dynamic";

const AntdModal = dynamic(() => import("antd/lib/modal"));

const Modal: React.FC<AntdModalProps> = (props) => {
  return <AntdModal {...props} />;
};

export type ModalProps = AntdModalProps;

export default Modal;
