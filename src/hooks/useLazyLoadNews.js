// hooks/useLazyLoad.js
import { useEffect, useRef, useState } from "react";

export const useLazyLoad = (
  onVisibleCallback,
  options = { threshold: 0.5 }
) => {
  const sectionRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasLoaded) {
        onVisibleCallback(); // fetches data passed from specific component
        setHasLoaded(true);
        observerInstance.unobserve(entry.target); // prevents from re-fetching data everytime section comes into view
      }
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasLoaded, onVisibleCallback, options]);

  return { sectionRef, hasLoaded };
};
