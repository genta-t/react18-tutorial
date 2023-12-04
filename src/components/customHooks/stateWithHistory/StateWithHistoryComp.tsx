import { useState } from "react";
import { useStateWithHistory } from "./useStateWithHistory";

const StateWithHistoryComp = () => {
  const [ count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1)
  const [ name, setName ] = useState("かいる")

  const handleName = () => {
    setName(name === "かいる" ? "じょん" : "かいる")
  }
  
  return (
    <>
      <h2>StateWithHistory</h2>
      <p>{count}</p>
      <p>{history.join(", ")}</p>
      <p>Pointer - {pointer}</p>
      <p>{name}</p>
      <button onClick={() => setCount(c => c * 2)}>*2</button>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>
      <button onClick={() => go(2)}>Go 2</button>
      <button onClick={handleName}>名前変更</button>
      <hr />
    </>
  )
}

export default StateWithHistoryComp;