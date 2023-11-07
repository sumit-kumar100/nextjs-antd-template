"use client";

import { useEffect } from "react";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { CustomSpin } from "@/components/ui";
import { getCookie, deleteCookie } from "cookies-next";

export default function NextLoader() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const noLoader = getCookie("no-loader");

  useEffect(() => {
    if (noLoader === "true") {
      deleteCookie("no-loader");
    }
  }, [noLoader]);

  if ((isFetching >= 1 || isMutating >= 1) && noLoader !== "true") {
    return <CustomSpin />;
  }

  return null;
}
