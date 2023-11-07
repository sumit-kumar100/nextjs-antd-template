"use client";

import * as React from "react";
import NProgress from "nprogress";

const NextProgress = () => {
  React.useEffect(() => {
    function isAnchorOfCurrentUrl(currentUrl: string, newUrl: string) {
      const currentUrlObj = new URL(currentUrl);
      const newUrlObj = new URL(newUrl);
      if (
        currentUrlObj.hostname === newUrlObj.hostname &&
        currentUrlObj.pathname === newUrlObj.pathname &&
        currentUrlObj.search === newUrlObj.search
      ) {
        const currentHash = currentUrlObj.hash;
        const newHash = newUrlObj.hash;
        return (
          currentHash !== newHash &&
          currentUrlObj.href.replace(currentHash, "") ===
            newUrlObj.href.replace(newHash, "")
        );
      }
      return false;
    }

    var npgclass = document.querySelectorAll("html");
    function findClosestAnchor(
      element: HTMLElement | null,
    ): HTMLAnchorElement | null {
      const anchorElement = element?.getAttribute("href") ? "a" : "";
      while (element && element.tagName.toLowerCase() !== anchorElement) {
        element = element.parentElement;
      }
      return element as HTMLAnchorElement;
    }
    function handleClick(event: MouseEvent) {
      try {
        const target = event.target as HTMLElement;
        const anchor = findClosestAnchor(target);
        if (anchor) {
          const currentUrl = window.location.href;
          const newUrl = (anchor as HTMLAnchorElement).href;
          const isExternalLink =
            (anchor as HTMLAnchorElement).target === "_blank";
          const isAnchor = isAnchorOfCurrentUrl(currentUrl, newUrl);
          if (newUrl === currentUrl || isAnchor || isExternalLink) {
            NProgress.start();
            NProgress.done();
            [].forEach.call(npgclass, function (el: Element) {
              el.classList.remove("nprogress-busy");
            });
          } else {
            NProgress.start();
            (function (history) {
              const pushState = history.pushState;
              history.pushState = function () {
                NProgress.done();
                [].forEach.call(npgclass, function (el: Element) {
                  el.classList.remove("nprogress-busy");
                });
                return pushState.apply(history, arguments as any);
              };
            })(window.history);
          }
        }
      } catch (err) {
        NProgress.start();
        NProgress.done();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default NextProgress;
