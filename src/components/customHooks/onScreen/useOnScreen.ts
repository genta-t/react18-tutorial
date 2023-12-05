import { useEffect, useState, RefObject } from "react";

export const useOnScreen = (
  ref: RefObject<HTMLElement>,
  rootMargin = "0px"
) => {
  const [ isVisible, setIsVisible ] = useState(false);

  useEffect(() => {
    console.log(ref.current);
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current !== null)
      return observer.unobserve(ref.current);
    }
  }, [ref.current, rootMargin]);

  return isVisible;
}
