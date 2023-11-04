"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/tailwind";

interface NextImageProps {
  src: string;
  alt: string;
  height?: number | `${number}` | undefined;
  width?: number | `${number}` | undefined;
  style?: object;
  className?: string;
}

const NextImage: React.FC<NextImageProps> = ({
  src,
  alt,
  height,
  width,
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
  }, [className, height, style, width]);

  return (
    <Image
      alt={alt}
      width={width || 75}
      height={height || 75}
      sizes="100vw"
      style={styles}
      src={src}
      priority
      className={cn(
        "duration-0 ease-in-out",
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      {...props}
    />
  );
};

export default NextImage;
