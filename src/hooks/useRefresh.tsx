import { useEffect, useRef } from "react";

export const useRefresh = (): void => {
  const refreshedRef = useRef<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const clerkElement = document.querySelector(".cl-rootBox");

      if (!clerkElement && refreshedRef.current < 1) {
        console.log("Reloading to get Clerk log in to appear");
        window.location.reload();
        refreshedRef.current += 1;
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
};
