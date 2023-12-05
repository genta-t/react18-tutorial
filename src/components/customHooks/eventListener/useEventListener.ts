import { useEffect, useRef } from "react";

export const useEventListener = <T extends Event>(
  eventType: string,
  callback: (event: T) => void,
  element: EventTarget | null = window
) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: T) => callbackRef.current(e);
    if (element){
      element.addEventListener(eventType, handler as EventListener);
  
      return () => element.removeEventListener(eventType, handler as EventListener);
    }
  }, [eventType, element]);
}
