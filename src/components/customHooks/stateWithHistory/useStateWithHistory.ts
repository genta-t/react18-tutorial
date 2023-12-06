import { useCallback, useRef, useState } from "react";

type TypeStateWithHistory<T> = [
  T,
  (v: T | ((value: T) => T)) => void,
  {
    history: T[];
    pointer: number;
    back: () => T;
    forward: () => T;
    go: (index: number) => T;
  }
]

export const useStateWithHistory = <T>(defaultValue: T, { capacity = 10 } = {}): TypeStateWithHistory<T> => {
  const [ value, setValue ] = useState<T>(defaultValue);
  const historyRef = useRef<T[]>([value]);
  const pointerRef = useRef(0);

  const set = useCallback((v: T | ((value: T) => T))=> {
    const resolvedValue = typeof v === "function" ? (v as (value: T) => T) (value) : v;
    if (historyRef.current[pointerRef.current] !== resolvedValue) {
      if (pointerRef.current < historyRef.current.length -1) {
        historyRef.current.splice(pointerRef.current + 1);
      };
      historyRef.current.push(resolvedValue);

      while (historyRef.current.length > capacity) {
        historyRef.current.shift();
      }
      pointerRef.current = historyRef.current.length - 1;
    }
    setValue(resolvedValue)
  },[capacity, value]);

  const back = useCallback(() => {
    if (pointerRef.current <= 0) return value; 
    pointerRef.current--;
    const newValue = historyRef.current[pointerRef.current]
    setValue(newValue);
    return newValue
  }, [value]);

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return value;
    pointerRef.current++;
    const newValue = historyRef.current[pointerRef.current]
    setValue(newValue);
    return newValue
  }, [value]);

  const go = useCallback((index: number) => {
    if (index < 0 || index > historyRef.current.length -1) return value;
    pointerRef.current = index;
    const newValue = historyRef.current[pointerRef.current]
    setValue(newValue);
    return newValue
  }, [value]);
  
  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    }
  ]
}
