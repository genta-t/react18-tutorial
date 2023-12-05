import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

const EffectOnceComp = () => {
  const [ count, setCount ] = useState(0);

  useEffectOnce(() => alert("はい"))
  return (
    <>
      <h2>effectOnce</h2>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1 )}>インクリメント</button>
      <hr />
    </>
  )
}

export default EffectOnceComp;