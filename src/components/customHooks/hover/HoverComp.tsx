import { useRef } from "react";
import { useHover } from "./useHover";

const HoverComp = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hovered = useHover(elementRef);
  
  return (
    <>
      <h2>hover</h2>
      <div
        ref={elementRef}
        style={{
          backgroundColor: hovered ? "blue" : "red",
          width: "100px",
          height: "100px",
        }}
      />
      <hr />
    </>
  )
}

export default HoverComp;
