"use client";

import React from "react";
import { CarouselProps as AntdCarouselProps } from "antd/lib/carousel";
import dynamic from "next/dynamic";

const AntdCarousel = dynamic(() => import("antd/lib/carousel"));

const Carousel: React.FC<AntdCarouselProps> = (props) => {
  return <AntdCarousel {...props} />;
};

export type CarouselProps = AntdCarouselProps;

export default Carousel;
