import { useEffect } from "react"

export const useEffectOnce = (cb: () => void | (() => void)) => {
  useEffect(cb, []);
}
