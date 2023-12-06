import { useReducer } from "react";

type TypesAction = {
  type: string;
}

const reducer = (state: number, action: TypesAction) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default: 
      return state;
  }
}

const UseReducer = () => {
  const [ state, despatch ] = useReducer(reducer, 0);
  
  return (
    <>
      <h2>useReducer</h2>
      <p>カウント：{state}</p>
      <button onClick={() => despatch({ type: "increment" })}>+</button> 
      <button onClick={() => despatch({ type: "decrement" })}>-</button> 
      <hr />
    </>
  );
}

export default UseReducer;
