import { useRef } from "react";
import { useOnScreen } from "./useOnScreen";

const OnScreenComp = () => {
  const headerTwoRef = useRef<HTMLHeadingElement | null>(null);
  const visible = useOnScreen(headerTwoRef, "-100px")

  return (
    <>
      <h2>onScreen</h2>
      <ManyText />
      <h2 ref={headerTwoRef}>ヘッダー２ {visible && "(見える)"}</h2>
      <ManyText />
      <hr />
    </>
  )
}

export default OnScreenComp;

const ManyText = () => {
  const text = [];
  for (let i = 0; i < 50; i++) {
    text.push(<p>テキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト</p>);
  }
  return (
    <div style={{ width: "90%" }}>
      {text}
    </div>
  )
}