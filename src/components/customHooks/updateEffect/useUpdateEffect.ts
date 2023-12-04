import { useEffect, useRef } from "react";

export const useUpdateEffect = (callback: () => void, dependencies: number[]) => {
  const firstRenderRef  = useRef(true)
  
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    return callback()
  }, dependencies)
}
