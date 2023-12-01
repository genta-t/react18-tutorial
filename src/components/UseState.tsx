import { useState } from "react";

const UseState = () => {
  const [ count , setCount ] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>useState</h2>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
      <hr />
    </>
  );
}

export default UseState;
