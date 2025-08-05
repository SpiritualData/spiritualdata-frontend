import { useEffect, useRef } from "react";

export const useRefresh = (): void => {
  const refreshedRef = useRef<number>(0);
  const maxRetries = 3;

  useEffect(() => {
    const checkClerkElement = () => {
      const clerkElement = document.querySelector(".cl-rootBox");

      if (!clerkElement && refreshedRef.current < maxRetries) {
        console.log(
          `Clerk element not found, retry ${
            refreshedRef.current + 1
          }/${maxRetries}`
        );
        refreshedRef.current += 1;

        // Wait a bit longer before reloading
        setTimeout(() => {
          if (!document.querySelector(".cl-rootBox")) {
            console.log("Reloading to get Clerk login to appear");
            window.location.reload();
          }
        }, 2000);
      }
    };

    // Check immediately
    checkClerkElement();

    // Check again after a delay
    const timer = setTimeout(checkClerkElement, 1000);

    return () => clearTimeout(timer);
  }, []);
};
