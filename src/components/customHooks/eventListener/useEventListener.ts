import { useEffect, useRef } from "react";

export const useEventListener = (
  eventType: string,
  callback: (event: KeyboardEvent) => void,
  element: HTMLElement | Window = window
) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => callbackRef.current(e);
    element.addEventListener(eventType, handler as EventListener);

    return () => element.removeEventListener(eventType, handler as EventListener);
  }, [eventType, element]);
}
