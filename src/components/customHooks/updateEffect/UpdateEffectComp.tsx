import { useState } from "react";
import { useUpdateEffect } from "./useUpdateEffect";

const UpdateEffectComp = () => {
  const [ count, setCount ] = useState(100);
  useUpdateEffect(() => alert(count), [count])

  return (
    <>
      <h2>UpdateEffect</h2>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <hr />
    </>
  )
}

export default UpdateEffectComp;