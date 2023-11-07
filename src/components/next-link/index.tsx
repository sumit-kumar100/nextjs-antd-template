"use client";

import { ComponentProps, forwardRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const NextLink = dynamic(() => import("next/link"));

export default forwardRef<
  HTMLAnchorElement,
  Omit<ComponentProps<typeof NextLink>, "href"> & {
    href: string;
    refresh?: boolean;
  }
>(function Link({ href, onClick, refresh, children, ...rest }, ref) {
  const router = useRouter();

  return refresh ? (
    <a
      ref={ref}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          event.preventDefault();
          router.push(href);
          router.refresh();
        }
      }}
      {...rest}
    >
      {children}
    </a>
  ) : (
    <NextLink ref={ref} href={href} onClick={onClick} {...rest}>
      {children}
    </NextLink>
  );
});
