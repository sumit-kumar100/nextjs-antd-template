"use client";

import * as React from "react";
import NextLoader from "@/components/next-loader";
import NextProgress from "@/components/next-progress";
import { theme } from "@/constants/themes";
import { ConfigProvider as AntdThemeProvider } from "antd";
import { QueryClientProvider as ClientSideRendering } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createCache,
  extractStyle,
  StyleProvider as AntdCahceProvider,
} from "@ant-design/cssinjs/lib";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { useServerInsertedHTML } from "next/navigation";
import { ClientQuery } from "./client-query";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new ClientQuery());

  const cache = React.useMemo<Entity>(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));

  return (
    <ClientSideRendering client={queryClient}>
      <AntdCahceProvider cache={cache}>
        <AntdThemeProvider theme={theme}>
          {children}
          <NextLoader />
          <NextProgress />
          <ReactQueryDevtools initialIsOpen={false} />
        </AntdThemeProvider>
      </AntdCahceProvider>
    </ClientSideRendering>
  );
}
