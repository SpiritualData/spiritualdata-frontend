import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const useRefresh = (): void => {
  const refreshedRef = useRef<number>(0);
  const location = useLocation();

  useEffect(() => {
    // Don't run useRefresh on certain pages where Clerk components aren't expected
    const skipPages = ["/onboarding", "/chat", "/outcome-chat"];
    const shouldSkip = skipPages.some(page => location.pathname.startsWith(page));
    
    if (shouldSkip) {
      return;
    }

    const timer = setTimeout(() => {
      const clerkElement = document.querySelector(".cl-rootBox");

      if (!clerkElement && refreshedRef.current < 1) {
        console.log("Reloading to get Clerk log in to appear");
        window.location.reload();
        refreshedRef.current += 1;
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);
};
