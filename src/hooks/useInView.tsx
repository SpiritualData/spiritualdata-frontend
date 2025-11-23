import { useEffect, useState, useRef } from "react";

export function useInView(options = { threshold: 0.3 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);

    const element = ref.current;
    observer.observe(element);

    // Check if element is already in view on mount
    const rect = element.getBoundingClientRect();
    const isInView = (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
    if (isInView) {
      setInView(true);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return { ref, inView };
}
