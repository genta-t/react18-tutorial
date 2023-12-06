import { useEffect, useRef, useState } from "react"
import { useEventListener } from "../eventListener/useEventListener";

export const useMediaQuery = (mediaQuery: string) => {
  const [ isMatch, setIsMatch ] = useState(false);
  const [ mediaQueryList, setMediaQueryList ] = useState<MediaQueryList | null>(null);
  const mediaQueryListRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener("change", (e: MediaQueryListEvent) => setIsMatch(e.matches), mediaQueryListRef);

  return isMatch;
}
