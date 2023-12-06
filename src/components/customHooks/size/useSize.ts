import { RefObject, useEffect, useState } from "react"

export const useSize = (ref: RefObject<HTMLElement>) => {
  const [ size, setSize ] = useState({});

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new ResizeObserver((entry) => setSize(entry[0].contentRect));
    observer.observe(ref.current);
    return () => observer.disconnect();
  },[]);

  return size;
}
