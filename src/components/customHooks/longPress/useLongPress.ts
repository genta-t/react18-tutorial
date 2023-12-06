import { useTimeOut } from "../timeOut/useTimeOut";
import { useEffectOnce } from "../effectOnce/useEffectOnce";
import { useEventListener } from "../eventListener/useEventListener";
import { RefObject } from "react";

export const useLongPress = (
  ref: RefObject<HTMLElement>,
  cb: () => void,
  {delay = 250 } = {}
) => {
  const { reset, clear } = useTimeOut(cb, delay);
  useEffectOnce(clear);
  
  useEventListener("mousedown", reset, ref);
  useEventListener("touchstart", reset, ref);
  useEventListener("mouseup", clear, ref);
  useEventListener("mouseleave", clear, ref);
  useEventListener("touchend", clear, ref);
}
