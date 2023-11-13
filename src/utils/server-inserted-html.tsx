"use client";

import React, { useMemo, ReactNode, useEffect } from "react";
import {
  createCache,
  extractStyle,
  StyleProvider,
} from "@ant-design/cssinjs/lib";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { useServerInsertedHTML } from "next/navigation";

export function withServerInsertedHtml<T>(Component: React.ComponentType<T>) {
  const WrappedComponent = (props: T & { children: ReactNode }) => {
    const cache = useMemo<Entity>(() => createCache(), []);

    useServerInsertedHTML(() => (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    ));

    return (
      <StyleProvider cache={cache}>
        <Component {...props} />
      </StyleProvider>
    );
  };

  WrappedComponent.displayName = `withServerInsertedHtml(${
    Component.displayName || Component.name
  })`;

  return WrappedComponent;
}
