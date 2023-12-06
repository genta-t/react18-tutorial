import { useRef } from "react";
import { useLongPress } from "./useLongPress";


const LongPressComp = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  useLongPress(elementRef, () => alert("長く押しました。"), { delay: 1000 }) //初期値は250

  return (
    <>
      <h2>longPress</h2>
      <div
        ref={elementRef}
        style={{
          backgroundColor:"red",
          width: "100px",
          height: "100px",
        }}
      />
      <hr />
    </>
  )
}

export default LongPressComp;