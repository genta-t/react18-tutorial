import { useState } from "react";
import { useEventListener } from "./useEventListener";

const EventListenerComp = () => {
  const [ key, setKey ] = useState("");
  useEventListener("keydown", e => {
    setKey(e.key);
  });

  return (
    <>
      <h2>EventListener</h2>
      <p>最後のkey(入力した文字を検出してくれる) : {key}</p>
      <hr />
    </>
  )
}

export default EventListenerComp;