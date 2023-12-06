import { useCallback, useState } from "react";
import SomeChild from "../items/SomeChild";

// 関数のメモ化 useMemoの関数バージョン

const UseCallBack = () => {
  const [ counter, setCounter ] = useState(1);

  // const showCount = () => {
  //   alert("これは重い処理です。")
  // }

  const showCount = useCallback(() => {
    alert("これは重い処理です。")
    setCounter(counter * 100);
  },[counter])
  
  return (
    <>
      <h2>useCallBack</h2>
      <p>{counter}</p>
      <SomeChild showCount={showCount} />
      <hr />
    </>
  );
}

export default UseCallBack;