import { RefObject, useState } from "react"
import { useEventListener } from "../eventListener/useEventListener";

export const useHover = (ref: RefObject<HTMLElement>) => {
  const [ hovered, setHovered ] = useState(false);

  useEventListener("mouseover", () => setHovered(true), ref);
  useEventListener("mouseout", () => setHovered(false), ref);

  return hovered;
}
