import { useMemo, useState } from "react";

//ブラウザのメモリに保存できる
//重い処理を行う時に使うと良いが使いすぎるとブラウザのメモリを圧迫するのでよくない。

const UseMemo = () => {
  const [ count01, setCount01 ] = useState(0);
  const [ count02, setCount02 ] = useState(0);

  // const square = () => {
  //   let i = 0;
  //   while (i < 200000) {
  //     i++;
  //   }
  //   return count02 * count02;
  // };

  const square = useMemo(() => {
    let i = 0;
    // 重い処理
    while (i < 2000000000) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  return (
    <>
      <h2>useMemo</h2>
        <p>カウント１：{count01}</p>
        <p>カウント２：{count02}</p>
        <p>カウント２の結果：{square}</p>
        <button onClick={() => setCount01(count01 + 1)}>count01</button>
        <button onClick={() => setCount02(count02 + 1)}>count02</button>
      <hr />
    </>
  );
}

export default UseMemo;
