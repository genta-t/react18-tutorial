import { useState } from "react";
import { useToggle } from "../toggle/useToggle";
import { TypesChildComp, useDebugInformation } from "./useDebugInformation";

const DebugInformationComp = () => {
  const [ boolean, toggle ] = useToggle(false);
  const [ count, setCount ] = useState(0);
  
  return (
    <>
      <h2>debugInformation</h2>
      <ChildComp 
        boolean={boolean} 
        count={count}
      />
      <button onClick={() => toggle()}>トグル</button>
      <button onClick={() => setCount(p => p + 1)}>インクリメント</button>
      <hr />
    </>
  )
}

export default DebugInformationComp;

const ChildComp = ({boolean, count}: TypesChildComp) => {
  const info = useDebugInformation("ChildComp", {boolean, count})

  return (
    <>
      <p>{boolean.toString()}</p>
      <p>{count}</p>
      <p>{JSON.stringify(info, null, 2)}</p>
    </>
  )
}