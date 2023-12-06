import React, { useEffect, useRef } from "react";

export const useEventListener = <T extends Event>(
  eventType: string,
  callback: (event: T) => void,
  element?: React.RefObject<EventTarget>
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: T) => callbackRef.current(e);
    if (element && element.current) {
      const currentElement = element.current;
      currentElement.addEventListener(eventType, handler as EventListener);
  
      return () => {
        if (currentElement) {
          currentElement.removeEventListener(eventType, handler as EventListener);
        }
      }
    }
  }, [eventType, element]);
}
