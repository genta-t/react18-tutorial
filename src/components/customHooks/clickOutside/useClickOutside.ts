import { MutableRefObject, useRef } from "react";
import { useEventListener } from "../eventListener/useEventListener"

export const useClickOutside = (
  ref: MutableRefObject<HTMLElement | null>, 
  cb: (event: MouseEvent) => void
) => {
  const docRef = useRef(document as EventTarget);
  useEventListener(
    "click",
    (e: MouseEvent) =>{
      if (ref.current == null || ref.current.contains(e.target as Node)) return cb(e);
    },
    docRef
  )
}
