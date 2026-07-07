import { useEffect } from "react";

/**
 * Adds <meta name="robots" content="noindex"> while the page is mounted.
 * Used for hidden/unlisted pages that should not be indexed.
 */
export const useNoIndex = (): void => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);
};
