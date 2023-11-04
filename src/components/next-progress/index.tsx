"use client";

import * as React from "react";
import NProgress from "nprogress";

export const loaderStyles = (
  <style>
    {`
        #nprogress {
          pointer-events: none;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.6);
        }
        #nprogress .bar {
          background: #2e7d32;
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
        }
        #nprogress .spinner {
          z-index: 1031;
          border: 4px solid #2e7d32;
          border-top: 4px solid #f3f3f3;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }
        .nprogress-custom-parent #nprogress .bar,
        .nprogress-custom-parent #nprogress .spinner {
          position: absolute;
        }
        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}
  </style>
);

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

    // eslint-disable-next-line no-var
    var npgclass = document.querySelectorAll("html");
    function findClosestAnchor(
      element: HTMLElement | null,
    ): HTMLAnchorElement | null {
      while (element && element.tagName.toLowerCase() !== "a") {
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
                // eslint-disable-next-line prefer-rest-params
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

  return loaderStyles;
};

export default NextProgress;
