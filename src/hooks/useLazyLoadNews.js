// hooks/useLazyLoad.js
import { useEffect, useRef, useState, useContext } from "react";
import { NewsContext } from "../context/NewsContext";

export const useLazyLoad = (
  onVisibleCallback,
  options = { threshold: 0.5 }
) => {
  const sectionRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { apiError, setApiError } = useContext(NewsContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries, observerInstance) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasLoaded) {
          try {
            const result = await onVisibleCallback(); // api call for different category
            if (result?.error) {
              setApiError(result.message || "An error occurred.");
            } else {
              setHasLoaded(true); // data loaded
              observerInstance.unobserve(entry.target); //prevents multiple api calls while scrolling
            }
          } catch (err) {
            setApiError(err.message || "An unexpected error occurred.");
          }
        }
      },
      options
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasLoaded, onVisibleCallback, options, setApiError]);

  return { sectionRef, hasLoaded };
};
