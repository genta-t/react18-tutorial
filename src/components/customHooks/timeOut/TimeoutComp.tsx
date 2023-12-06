import { useState } from "react";
import { useTimeOut } from "./useTimeOut";

const TimeoutComp = () => {
  const [ count, setCount ] = useState(100);
  const { clear, reset } = useTimeOut(() => setCount(0), 2000)
  // ページ読み込み時に設定時間内にボタンを押すとカウント初期値が設定
  return (
    <>
      <h2>Timeout</h2>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={clear}>クリア</button>
      <button onClick={reset}>リセット</button>
      <hr />
    </>
  )
}

export default TimeoutComp;