import { useState } from "react";
import { useDebounce } from "./useDebounce";


const Debounce = () => {
  const [ count, setCount ] = useState(100);
  useDebounce(() => alert(count), 1000, [count])
  return (
    <>
      <h2>debounce</h2>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <hr />
    </>
  )
}

export default Debounce;