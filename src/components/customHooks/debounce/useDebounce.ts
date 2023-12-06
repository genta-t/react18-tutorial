import { useEffect } from "react";
import { useTimeOut } from "../timeOut/useTimeOut";

export const useDebounce = (
  callback: () => void,
  delay: number,
  dependencies: number[]
) => {
  const { reset, clear } = useTimeOut(callback, delay)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}
