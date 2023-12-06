import { useRef } from "react"

export const useRenderCount = () => {
  const count = useRef(1);

  const incrementCount = () => {
    count.current++;
  };
  
  return { renderCount: count.current, incrementCount};
}
