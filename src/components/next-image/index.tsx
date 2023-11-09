"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";

type NextImageProps = {
  src: string;
  alt: string;
  style?: object;
  className?: string;
};

const Image = dynamic(() => import("next/image"));

const NextImage: React.FC<NextImageProps> = ({
  src,
  alt,
  style,
  className,
  ...props
}) => {
  const [isLoading, setLoading] = useState(true);

  const styles = useMemo(() => {
    if (className?.includes("h-") || className?.includes("w-")) {
      const filteredStyle = { ...style };

      if ("width" in filteredStyle) {
        delete filteredStyle.width;
      }
      if ("height" in filteredStyle) {
        delete filteredStyle.height;
      }
      return filteredStyle;
    } else {
      return {
        width: "100%",
        height: "auto",
        ...style,
      };
    }
  }, [className, style]);

  return (
    <Image
      alt={alt}
      width={100}
      height={100}
      sizes="100vw"
      style={styles}
      src={src}
      priority
      className={`
      duration-0 ease-in-out
      ${
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }
      ${className}
    `}
      onLoad={() => setLoading(false)}
      {...props}
    />
  );
};

export default NextImage;
