"use client";

import dynamic from "next/dynamic";

const QRCode = dynamic(() => import("antd/lib/qr-code"));

export default QRCode;
