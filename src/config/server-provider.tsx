"use client";

import {
  HydrationBoundaryProps,
  HydrationBoundary as ServerSideRendering,
} from "@tanstack/react-query";

export function ServerProvider(props: HydrationBoundaryProps) {
  return <ServerSideRendering {...props} />;
}
