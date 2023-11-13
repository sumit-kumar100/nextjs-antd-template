"use client";

import NextLoader from "@/components/next-loader";
import NextProgress from "@/components/next-progress";
import ConfigProvider from "@/components/ui/config-provider";
import { withServerInsertedHtml } from "@/utils/server-inserted-html";
import { useState } from "react";
import { theme } from "@/constants/themes";
import { QueryClientProvider as ClientSideRendering } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ClientQuery } from "./client-query";

export const ClientProvider = withServerInsertedHtml(
  ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => new ClientQuery());
    return (
      <ClientSideRendering client={queryClient}>
        <ConfigProvider theme={theme}>
          {children}
          <NextLoader />
          <NextProgress />
          <ReactQueryDevtools initialIsOpen={false} />
        </ConfigProvider>
      </ClientSideRendering>
    );
  },
);
