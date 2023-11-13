"use client";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("antd/lib/carousel"));

export default Carousel;
