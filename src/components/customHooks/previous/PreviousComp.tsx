import { useState } from "react";
import { usePrevious } from "./usePrevious";

const PreviousComp = () => {
  const [ count, setCount ] = useState(0)
  const [ name, setName ] = useState("かいる")
  const previousCount = usePrevious(count)
  
  const handleName = () => {
    setName(name === "かいる" ? "じょん" : "かいる")
  }
  return (
    <>
      <h2>Previous</h2>
      <p>{count} - {previousCount}</p>
      <p>{name}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={handleName}>名前変更</button>
      <hr />
    </>
  )
}

export default PreviousComp;