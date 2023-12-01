import { useEffect, useState } from "react";

const UseEffect = () => {
  const [ count , setCount ] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => { // 第二引数にcountを入れている場合中でsetCountは使わない→無限ループする
    console.log("aaaaaaa");
  }, [count]) //カウントの回数分中身のログが呼び出されている
  
  return (
    <>
      <h2>useEffect</h2>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
    </>
  );
}

export default UseEffect;
